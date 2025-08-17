<template>
	<div class="flex flex-col gap-4 p-4">

		<div class="flex flex-col lg:flex-row justify-between gap-4 w-full h-[50vh]">
			<card class="w-full full">
				<chart id="1" :chart-options="stackedBarChart" @click="handleChartClick" />
			</card>

			<card class="w-full h-full">
				<chart id="2" :chart-options="lineChart" />
			</card>
		</div>

		<table-el :tableRows="townsTableData" @row-click="handleRowClick" />
	</div>
</template>

<script>


export default {
	name: "gemeenten",
	data() {
		return {
			towns: [],
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
					data: this.towns.map(town => town.properties[key.name])
				}
			});
		},
		stackedBarChart() {
			return {
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
				dataZoom: [{
					type: 'inside',
					id: 'insideX',
					xAxisIndex: 0,
					start: 0,
					end: 50,
					zoomOnMouseWheel: false,
					moveOnMouseMove: true,
					moveOnMouseWheel: true
				}],
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
					{ label: 'Aantal Mannen', value: town.properties.aantal_mannen },
					{ label: 'Aantal Vrouwen', value: town.properties.aantal_vrouwen },
					{ label: 'Postcode', value: town.properties.postcode }
				];
			});
		}
	},
	methods: {
		async fetchTowns() {
			const response = await $fetch('/api/gemeenten', {
				method: 'GET'
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
		this.fetchTowns();
	},
}
</script>