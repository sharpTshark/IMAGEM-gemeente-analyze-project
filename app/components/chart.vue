<template>
	<div :id="id" style="width: 100%; height: 100%;"></div>
</template>

<script>

import * as echarts from "echarts";

export default {
	name: "ChartComponent",
	data() {
		return {
			chart: null
		}
	},	
	props: {
		id: {
			type: String,
			required: true
		},
		chartOptions: {
			type: Object,
			default: {}
		}
	},
	mounted() {

		const chartElement = document.getElementById(this.id)

		this.chart = echarts.init(chartElement)

		this.chart.setOption(this.chartOptions)
	}
};

</script>