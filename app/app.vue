<template>
	<main class="flex-1 overflow-x-hidden">

		<navbar :navbarItems="navbarItems" />

		<nuxt-page />
	</main>
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


<style>
html {
	overflow-y: auto;
	scrollbar-gutter: stable;
}
</style>