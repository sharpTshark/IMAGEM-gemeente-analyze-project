<template>
	<div class="flex flex-col gap-4 p-4">

		<div class="flex flex-col lg:flex-row justify-between gap-4 w-full">
			<card class="w-full h-81">
				<chart id="1" :chart-options="stackedBarChart" />
			</card>

			<card class="w-full h-81">
				<chart id="2" :chart-options="lineChart" />
			</card>
		</div>

		<table-el :tableRows="townsTableData" @row-click="handleRowClick" />
	</div>
</template>

<script>
import { LinesChart } from 'echarts/charts';


export default {
	name: "gemeenten",
	data() {
		return {
			towns: [],
			stackedBarChart: {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value',
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						stack: 'a',
						name: 'a'
					},
					{
						data: [10, 46, 64, '-', 0, '-', 0],
						type: 'bar',
						stack: 'a',
						name: 'b'
					},
					{
						data: [30, '-', 0, 20, 10, '-', 0],
						type: 'bar',
						stack: 'a',
						name: 'c'
					},
					{
						data: [30, '-', 0, 20, 10, '-', 0],
						type: 'bar',
						stack: 'b',
						name: 'd'
					},
					{
						data: [10, 20, 150, 0, '-', 50, 10],
						type: 'bar',
						stack: 'b',
						name: 'e'
					}
				]
			},
		}
	},
	computed: {
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
					data: ['voor 1945', '1945 1965', '1965 1975', '1975 1985', '1985 1995', '1995 2005', '2005 2015', '2015 en erna']
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

			console.log(1);


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
	},
	mounted() {
		this.fetchTowns();
	},
}
</script>