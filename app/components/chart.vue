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
		},
		geoJsonToRegister: {
			type: Object,
			default: null
		}
	},
	mounted() {

		if (this.chartOptions.geo && !this.geoJsonToRegister) {
			throw new Error('GeoJSON data is required for map charts');
		}

		if (this.geoJsonToRegister) {
			echarts.registerMap(`region-${this.id}`, this.geoJsonToRegister);
		}

		const chartElement = document.getElementById(this.id)

		this.chart = echarts.init(chartElement)

		this.chart.setOption(this.chartOptions)

		this.chart.on('click', (params) => {
			if (params && params.data) {
				this.$emit('click', params);
			}
		});
	},
	watch: {
		chartOptions: {
			handler(newOptions) {
				if (this.chart) {
					this.chart.setOption(newOptions);
				}
			},
			deep: true
		}
	},
};

</script>