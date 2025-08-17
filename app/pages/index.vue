<template>
	<main class="flex-1 overflow-x-hidden">
		<div class="p-4 mx-auto max-w-7xl flex flex-col lg:flex-row gap-8">

			<card class="w-full lg:w-[40%] h-72">
				<chart id="1" :chartOptions="pieChartOptions" />
			</card>

			<card class="w-full h-72">
				<chart v-if="town" id="2" :chartOptions="mapChart" :geoJsonToRegister="geojson" />
			</card>
		</div>
	</main>
</template>


<script>


export default {
	name: "home",
	data() {
		return {
			town: null,
		}
	},
	computed: {
		pieChartOptions() {
			return {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series: [
					{
						type: 'pie',
						data: [
							{ value: this.town ? this.town.properties.aantal_mannen : 0, name: 'Mannen' },
							{ value: this.town ? this.town.properties.aantal_vrouwen : 0, name: 'Vrouwen' },
						],
					}
				]
			}
		},
		mapChart() {
			return {
				geo: {
					map: 'region-2',
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
		geojson() {
			return {
				type: "FeatureCollection",
				features: [this.town]
			}

		}
	},
	methods: {
		async fetchTown(query) {

			const response = await $fetch('/api/gemeenten', {
				method: 'GET',
				query
			});

			this.town = response.features[0];
			this.$router.push(`/?postcode=${this.town.properties.postcode}`);
		}
	},
	async mounted() {
		let query = { limit: 1 }
		if (this.$route.query.postcode) {
			query.postcode = this.$route.query.postcode
		}

		this.fetchTown(query)
	}
}

</script>
