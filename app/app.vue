<template>
	<div>

		<navbar :navbarItems="navbarItems" />

		<nuxt-page />
	</div>
</template>


<script>

export default {
	name: 'app',
	data() {
		return {
			navbarItems: [
				{
					path: "/home",
					label: "Dashboard"
				},
				{
					path: "/gemeenten",
					label: "Gemeenten"
				}
			]
		}
	}
}

</script>