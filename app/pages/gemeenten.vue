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
					type: 'value'
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
			lineChart: {
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: 'Email',
						type: 'line',
						stack: 'Total',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: 'Union Ads',
						type: 'line',
						stack: 'Total',
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: 'Video Ads',
						type: 'line',
						stack: 'Total',
						data: [150, 232, 201, 154, 190, 330, 410]
					},
					{
						name: 'Direct',
						type: 'line',
						stack: 'Total',
						data: [320, 332, 301, 334, 390, 330, 320]
					},
					{
						name: 'Search Engine',
						type: 'line',
						stack: 'Total',
						data: [820, 932, 901, 934, 1290, 1330, 1320]
					}
				]

			}
		}
	},
	computed: {
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
		}
	},
	mounted() {
		this.fetchTowns();
	},
}
</script>