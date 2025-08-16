<template>

	<div class="lg:col-span-9">
		<div class="flex flex-col">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<card class="overflow-hidden md:rounded-xl">
						<table class="min-w-full bg-white lg:divide-y lg:divide-gray-200">
							<thead class="hidden lg:table-header-group">
								<tr>
									<th v-for="rowName in tableRowNames"
										class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
										<div class="flex items-center">
											{{ rowName }}
										</div>
									</th>

								</tr>
							</thead>

							<tbody class="divide-y divide-gray-200">
								<tr v-for="row in tableRows" class=" cursor-pointer" @click="$emit('row-click', row)">
									<td v-for="column in row"
										class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
										{{ column.value }}
									</td>
								</tr>
							</tbody>
						</table>
					</card>
				</div>
			</div>
		</div>
	</div>
</template>


<script>

export default {
	name: "TableEl",
	props: {
		tableRows: {
			type: Array,
			default: [
				[
					{
						label: 'ID',
						value: 'test'
					},
					{
						label: 'Product',
						value: 'test'
					},
					{
						label: 'Costumer Name',
						value: 'test'
					},
					{
						label: 'Date',
						value: 'test'
					},
					{
						label: 'Price',
						value: 'test'
					},
					{
						label: 'Status',
						value: 'test'
					}
				],
				[
					{
						label: 'ID',
						value: 'test'
					},
					{
						label: 'Product',
						value: 'test'
					},
					{
						label: 'Costumer Name',
						value: 'test'
					},
					{
						label: 'Date',
						value: 'test'
					},
					{
						label: 'Price',
						value: 'test'
					},
					{
						label: 'Status',
						value: 'test'
					}
				],
				[
					{
						label: 'ID',
						value: 'test'
					},
					{
						label: 'Product',
						value: 'test'
					},
					{
						label: 'Costumer Name',
						value: 'test'
					},
					{
						label: 'Date',
						value: 'test'
					},
					{
						label: 'Price',
						value: 'test'
					},
					{
						label: 'Status',
						value: 'test'
					}
				],
			]
		}
	},
	computed: {
		tableRowNames() {
			if (!this.tableRows || this.tableRows.length === 0) {
				return [];
			}
			return this.tableRows[0].map(row => row.label)
		}
	}
}

</script>