<template>
	<div>
		<select id="countries"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
			:value="modelValue" @input="onInput">
			<option disabled value="" v-if="placeholder">{{ placeholder }}</option>
			<option v-for="option in options" :key="option.value" :value="option.value">
				{{ option.label }}
			</option>
		</select>
	</div>
</template>

<script>

export default {
	name: "SelectEl",
	props: {
		modelValue: {
			type: [String, Number],
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Select an option'
		},
		options: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		onInput(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
}

</script>