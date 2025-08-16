<template>

	<div class="relative">
		<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
			<svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
				stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
				</path>
			</svg>
		</div>

		<input type="text" v-model="search"
			class="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
			placeholder="Search here" />
	</div>

</template>

<script>

export default {
	name: 'search',
	data() {
		return {
			modelValue: ""
		}
	},
	watch: {
		modelValue(newValue) {
			this.$emit('modelValue', newValue);
		}
	}
}

</script>