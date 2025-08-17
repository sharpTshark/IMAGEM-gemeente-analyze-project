<template>
	<div class="flex flex-col gap-4 p-4">

		<div class="w-full flex justify-end gap-4">
			<select-el v-model="selectedFetchLimit" :options="fetchLimitOptions" />
			<select-el v-model="selectedFetchYear" :options="fetchYearOptions" />
		</div>

		<div class="flex flex-col lg:flex-row justify-between gap-4 w-full h-[50vh]">
			<card class="w-full full">
				<chart id="1" :chart-options="stackedBarChart" @click="handleChartClick" />
			</card>

			<card class="w-full h-full">
				<chart id="2" :chart-options="lineChart" />
			</card>
		</div>

		<div class="flex gap-4">
			<table-el :tableRows="townsTableData" @row-click="handleRowClick" />

			<card class="w-full h-72">
				<chart v-if="towns.length" id="3" :chartOptions="mapChart" :geoJsonToRegister="townsGeoData" />
			</card>
		</div>
	</div>
</template>

<script>


export default {
	name: "gemeenten",
	data() {
		return {
			route: useRoute(),
			towns: [],
			selectedFetchLimit: 10,
			fetchLimitOptions: [
				{ label: '10 results', value: 10 },
				{ label: '100 results', value: 100 },
				{ label: '1000 results', value: 1000 }
			],
			selectedFetchYear: 2023,
			fetchYearOptions: [
				{ label: '2015', value: 2015 },
				{ label: '2016', value: 2016 },
				{ label: '2017', value: 2017 },
				{ label: '2018', value: 2018 },
				{ label: '2019', value: 2019 },
				{ label: '2020', value: 2020 },
				{ label: '2021', value: 2021 },
				{ label: '2022', value: 2022 },
				{ label: '2023', value: 2023 }
			],
			propertiesKeys: [
				{
					name: 'aantal_inwoners_0_tot_15_jaar',
					label: '0 tot 15 jaar'
				},
				{
					name: 'aantal_inwoners_15_tot_25_jaar',
					label: '15 tot 25 jaar'
				},
				{
					name: 'aantal_inwoners_25_tot_45_jaar',
					label: '25 tot 45 jaar'
				},
				{
					name: 'aantal_inwoners_45_tot_65_jaar',
					label: '45 tot 65 jaar'
				},
				{
					name: 'aantal_inwoners_65_jaar_en_ouder',
					label: '65 jaar en ouder'
				}
			]
		}
	},
	computed: {
		PeopleAgeDifferences() {
			return this.propertiesKeys.map(key => {
				return {
					name: key.label,
					type: 'bar',
					stack: 'total',
					barWidth: '60%',
					label: {
						show: true
					},
					data: this.towns.map(town => town.properties[key.name] > 0 ? town.properties[key.name] : 0)
				}
			});
		},
		stackedBarChart() {
			return {
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				tooltip: {
					trigger: 'item',
					formatter: function (params) {
						return `Aantal: ${params.value}<br/>${params.seriesName}<br/>Postcode: ${params.name}`;
					}
				},
				legend: {
					selectedMode: false
				},
				yAxis: {
					type: 'value'
				},
				xAxis: {
					type: 'category',
					data: this.towns.map(town => town.properties.postcode)
				},
				series: this.PeopleAgeDifferences
			}
		},
		lineChart() {
			return {
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: this.towns.map(town => town.properties.postcode),
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '15%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['voor 1945', '1945 - 1965', '1965 - 1975', '1975 - 1985', '1985 - 1995', '1995 - 2005', '2005 - 2015', '2015 en erna']
				},
				yAxis: {
					type: 'value'
				},
				series: this.towns.map(town => {
					return {
						name: town.properties.postcode,
						type: 'line',
						stack: 'Total',
						data: this.townHousesByYear(town)
					};
				})
			}
		},
		townsTableData() {

			if (!this.towns || this.towns.length === 0) {
				return [];
			}

			return this.towns.map(town => {
				return [
					{ label: 'ID', value: town.id },
					{ label: 'Postcode', value: town.properties.postcode }
				];
			});
		},
		mapChart() {
			return {
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				geo: {
					map: 'region-3',
					roam: true,
					aspectScale: Math.cos((47 * Math.PI) / 180),
					nameProperty: 'postcode',
					label: {
						show: true,
						textBorderColor: '#fff',
						textBorderWidth: 2
					}
				},
				tooltip: {},
				series: [
					{
						type: 'graph',
						coordinateSystem: 'geo',
						edgeSymbol: ['none', 'arrow'],
						edgeSymbolSize: 5,
						lineStyle: {
							color: '#718adbff',
							opacity: 1
						}
					}
				]
			}
		},

		townsGeoData() {
			if (!this.towns || this.towns.length === 0) {
				return null;
			}

			return {
				type: 'FeatureCollection',
				features: this.towns.map(town => ({
					type: 'Feature',
					properties: town.properties,
					geometry: town.geometry
				}))
			};
		}
	},
	methods: {
		async fetchTowns(query) {
			const response = await $fetch('/api/gemeenten', {
				method: 'GET',
				query
			});

			this.towns = response.features;
		},
		handleRowClick(row) {
			const postcode = row.find(column => column.label === 'Postcode').value;
			this.$router.push(`/?postcode=${postcode}`);
		},
		townHousesByYear(town) {
			if (!town) {
				return [];
			}

			const data = [
				town.properties.aantal_woningen_bouwjaar_voor_1945,
				town.properties.aantal_woningen_bouwjaar_45_tot_65,
				town.properties.aantal_woningen_bouwjaar_65_tot_75,
				town.properties.aantal_woningen_bouwjaar_75_tot_85,
				town.properties.aantal_woningen_bouwjaar_85_tot_95,
				town.properties.aantal_woningen_bouwjaar_95_tot_2005,
				town.properties.aantal_woningen_bouwjaar_05_tot_15,
				town.properties.aantal_woningen_bouwjaar_15_en_later
			]

			return data.map(value => {
				if (value < 0) {
					this.lineChartError = 'Negative values found';
					return 0;
				}
				return value;
			});
		},
		handleChartClick(params) {
			if (!params.name) return;

			const postcode = params.name;
			this.$router.push(`/?postcode=${postcode}`);
		}
	},
	mounted() {
		this.fetchTowns({
			limit: this.selectedFetchLimit,
			year: this.selectedFetchYear
		});
	},
	watch: {
		selectedFetchLimit() {
			this.fetchTowns({
				limit: this.selectedFetchLimit,
				year: this.selectedFetchYear
			});
		},
		selectedFetchYear() {
			this.fetchTowns({
				limit: this.selectedFetchLimit,
				year: this.selectedFetchYear
			});
		}
	}
}
</script>