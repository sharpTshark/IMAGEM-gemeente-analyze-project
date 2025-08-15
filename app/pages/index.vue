<template>
	<div>
		<Chart id="1" :chart-options="chartOptions" />
	</div>
</template>


<script>

export default {
	name: "index",
	data() {
		return {
			chartOptions: {
				title: {
					text: "ECharts Getting Started Example"
				},
				tooltip: {},
				xAxis: {
					data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
				},
				yAxis: {},
				series: [
					{
					name: "sales",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20]
					}
				]
			}
		}
	}
}

</script>