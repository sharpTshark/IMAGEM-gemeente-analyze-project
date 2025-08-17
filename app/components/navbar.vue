<template>

	<header class="">
		<div class="py-3 bg-gray-900">
			<div class="container px-4 mx-auto">
				<div class="flex items-center justify-between">
					<div class="block -m-2 lg:hidden">
						<button type="button"
							class="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
							<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16">
								</path>
							</svg>
						</button>
					</div>

					<div class="flex-shrink-0 ml-4 mr-4 lg:ml-0">
						<a href="#" title="" class="flex items-center">
							<img class="block w-auto h-8 lg:hidden"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
								alt="" />
							<img class="hidden w-auto h-8 lg:block"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-alt.svg"
								alt="" />
						</a>
					</div>

					<div class="flex items-center ml-4 lg:ml-0">
						<button type="button"
							class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
							id="options-menu-button" aria-expanded="false" aria-haspopup="true">
							<span class="flex items-center justify-between w-full">
								<span class="flex items-center justify-between min-w-0 space-x-3">
									<img class="flex-shrink-0 object-cover bg-gray-700 rounded-full w-7 h-7"
										src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-4.png"
										alt="" />
									<span class="flex-1 hidden min-w-0 md:flex">
										<span class="text-sm font-medium text-white truncate"> Guest
										</span>
									</span>
								</span>
								<svg class="flex-shrink-0 w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-500"
									xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7">
									</path>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="hidden py-3 bg-white border-b border-gray-200 lg:block">
			<div class="container px-4 mx-auto">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<RouterLink v-for="navbarItem in navbarItems" :title="navbarItem.label" :to="navbarItem.path"
							:class="route.fullPath === navbarItem.path ? 'bg-gray-100' : 'bg-white'"
							class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 rounded-lg hover:bg-gray-100 cursor-pointer">
							<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
								</path>
							</svg>
							{{ navbarItem.label }}
						</RouterLink>
					</div>
					<div v-if="route.fullPath.startsWith('/?postcode')" class="flex items-center gap-2">
						<p class="text-sm text-gray-500">
							Postcode:
						</p>
						<p class="text-sm text-gray-500">
							{{ route.query.postcode }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>


</template>

<script>
import { RouterLink } from 'vue-router';


export default {
	name: 'navbar',
	data() {
		return {
			route: useRoute(),
			search: '',
		}
	},
	props: {
		navbarItems: {
			type: Array,
			default: []
		}
	}
}

</script>