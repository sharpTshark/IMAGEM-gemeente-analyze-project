<template>
	<main class="flex-1 overflow-x-hidden">
		<div class="p-4 mx-auto max-w-7xl flex flex-col lg:flex-row gap-8">

			<card class="w-full lg:w-[40%] h-72">
				<chart id="1" :chartOptions="pieChartOptions" />
			</card>

			<card class="w-full h-72">
				<chart id="2" :chartOptions="barChartOptions" />
			</card>
		</div>



	</main>
</template>


<script>

export default {
	name: "home",
	data() {
		return {
			pieChartOptions: {
				title: {
					text: 'Aantal inwoners per geslacht',
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series: [
					{
						type: 'pie',
						data: [
							{ value: 1048, name: 'Mannen' },
							{ value: 735, name: 'Vrouwen' },
						],
					}
				]
			},
			barChartOptions: {
				dataset: {
					source: [
						['amount', 'product'],
						[2670, 'aantal_inwoners_0_tot_15_jaar'],
						[2585, 'aantal_inwoners_15_tot_25_jaar'],
						[7800, 'aantal_inwoners_25_tot_45_jaar'],
						[6065, 'aantal_inwoners_45_tot_65_jaar'],
						[2515, 'aantal_inwoners_65_jaar_en_ouder'],
					]
				},
				xAxis: { name: 'amount' },
				yAxis: { type: 'category' },
				series: [
					{
						type: 'bar',
						encode: {
							x: 'amount',
							y: 'product'
						}
					}
				]

			}
		}
	}
}

</script>
