<template>
	<div class="flex flex-col">

		<div class="flex-1 overflow-x-hidden">
			<main>
				<div class="py-6">
					<div class="px-4 mx-auto max-w-7xl">
						<div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-9">

							<card>
								<div class="px-4 py-5 sm:p-6">
									<p class="text-base font-bold text-gray-900">Hey Jacob 👋</p>
									<p class="mt-1 text-sm font-medium text-gray-500">Here's what's happening with
										your product today</p>

									<div class="grid grid-cols-2 mt-6 xl:mt-12 gap-x-8">
										<div>
											<p class="text-2xl font-bold text-gray-900">83</p>
											<p class="mt-1 text-sm text-gray-500 font-mediume">Unique Subscribers
											</p>
										</div>

										<div>
											<p class="text-2xl font-bold text-gray-900">$5,994</p>
											<p class="mt-1 text-sm text-gray-500 font-mediume">Current MRR</p>
										</div>
									</div>
								</div>

								<div class="px-4 py-4 sm:px-6">
									<div class="flex items-center">
										<svg class="mr-2 h-2.5 w-2.5 text-indigo-500 flex-shrink-0" fill="currentColor"
											viewBox="0 0 8 8">
											<circle cx="4" cy="4" r="3"></circle>
										</svg>
										<p class="text-sm font-medium text-gray-900"><span class="font-bold">8 new
												sales</span> has been made</p>
									</div>
								</div>

								<div class="px-4 py-4 sm:px-6">
									<div class="flex items-center">
										<svg class="mr-2 h-2.5 w-2.5 text-indigo-500 flex-shrink-0" fill="currentColor"
											viewBox="0 0 8 8">
											<circle cx="4" cy="4" r="3"></circle>
										</svg>
										<p class="text-sm font-medium text-gray-900"><span class="font-bold">7 new
												customers</span> has joined as subscribers</p>
									</div>
								</div>
							</card>

							<card class="lg:col-span-6">
								<div class="px-4 pt-5 sm:px-6">
									<div class="flex items-center justify-between">
										<p class="text-base font-bold text-gray-900">Sales Report</p>

										<button type="button"
											class="items-center hidden px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm sm:inline-flex hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
											<svg class="w-4 h-4 mr-1 -ml-1" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round"
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
											Export to CSV
										</button>
									</div>

									<div id="chart4"></div>
								</div>
							</card>

							<card>
								<div class="px-4 py-5 sm:p-6">
									<div class="sm:flex sm:items-center sm:justify-between">
										<p class="text-base font-bold text-gray-900">Traffic Sources</p>

										<div class="mt-4 sm:mt-0">
											<div>
												<label for="" class="sr-only"> Duration </label>
												<select name="" id=""
													class="block w-full py-0 pl-0 pr-10 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
													<option>Last 7 days</option>
												</select>
											</div>
										</div>
									</div>

									<div class="mt-8 space-y-6">
										<div>
											<div class="flex items-center justify-between">
												<p class="text-sm font-medium text-gray-900">Direct</p>
												<p class="text-sm font-medium text-gray-900">1,43,382</p>
											</div>
											<div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
												<div
													class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[60%]">
												</div>
											</div>
										</div>

										<div>
											<div class="flex items-center justify-between">
												<p class="text-sm font-medium text-gray-900">Referral</p>
												<p class="text-sm font-medium text-gray-900">87,974</p>
											</div>
											<div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
												<div
													class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[50%]">
												</div>
											</div>
										</div>

										<div>
											<div class="flex items-center justify-between">
												<p class="text-sm font-medium text-gray-900">Social Media</p>
												<p class="text-sm font-medium text-gray-900">45,211</p>
											</div>
											<div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
												<div
													class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[30%]">
												</div>
											</div>
										</div>

										<div>
											<div class="flex items-center justify-between">
												<p class="text-sm font-medium text-gray-900">Twitter</p>
												<p class="text-sm font-medium text-gray-900">21,893</p>
											</div>
											<div class="mt-2 bg-gray-200 h-1.5 rounded-full relative">
												<div
													class="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[15%]">
												</div>
											</div>
										</div>
									</div>
								</div>
							</card>

							<div class="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
								<div class="px-4 py-5 sm:p-6">
									<p class="text-base font-bold text-gray-900">Activity</p>

									<div class="mt-6 space-y-6">
										<div class="flex items-center">
											<img class="flex-shrink-0 object-cover rounded-full w-9 h-9"
												src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female.png"
												alt="" />
											<div class="flex-1 min-w-0 ml-4">
												<p class="text-sm font-bold text-gray-900 truncate">Kristin Watson
												</p>
												<p class="mt-1 text-xs font-medium text-gray-500">Purchased <span
														class="text-indigo-600"> Clarity Landing UI Kit </span></p>
											</div>
										</div>

										<div class="flex items-center">
											<img class="flex-shrink-0 object-cover rounded-full w-9 h-9"
												src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-2.png"
												alt="" />
											<div class="flex-1 min-w-0 ml-4">
												<p class="text-sm font-bold text-gray-900 truncate">Brooklyn Simmons
												</p>
												<p class="mt-1 text-xs font-medium text-gray-500">Purchased <span
														class="text-indigo-600"> Clarity Ecommerce UI Kit </span>
												</p>
											</div>
										</div>

										<div class="flex items-center">
											<img class="flex-shrink-0 object-cover rounded-full w-9 h-9"
												src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-male.png"
												alt="" />
											<div class="flex-1 min-w-0 ml-4">
												<p class="text-sm font-bold text-gray-900 truncate">Darrell Steward
												</p>
												<p class="mt-1 text-xs font-medium text-gray-500">Purchased <span
														class="text-indigo-600"> Clarity Ecommerce UI Kit </span>
												</p>
											</div>
										</div>

										<div class="flex items-center">
											<img class="flex-shrink-0 object-cover rounded-full w-9 h-9"
												src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/avatar-female-3.png"
												alt="" />
											<div class="flex-1 min-w-0 ml-4">
												<p class="text-sm font-bold text-gray-900 truncate">Ronald Richards
												</p>
												<p class="mt-1 text-xs font-medium text-gray-500">Purchased <span
														class="text-indigo-600"> Clarity Landing UI Kit </span></p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
								<div class="px-4 py-5 sm:p-6">
									<p class="text-base font-bold text-gray-900">Insights</p>

									<div class="mt-6 space-y-3">
										<div class="bg-gray-100 rounded-lg">
											<div class="px-3 py-3">
												<div class="flex items-center">
													<svg class="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600"
														xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<p class="text-sm font-medium text-gray-900"><span
															class="font-bold">39%</span> of your visitors are coming
														from Twitter</p>
												</div>
											</div>
										</div>

										<div class="bg-gray-100 rounded-lg">
											<div class="px-3 py-3">
												<div class="flex items-center">
													<svg class="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600"
														xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<p class="text-sm font-medium text-gray-900">Current MRR is the
														<span class="font-bold">highest</span> in last 12 months
													</p>
												</div>
											</div>
										</div>

										<div class="bg-gray-100 rounded-lg">
											<div class="px-3 py-3">
												<div class="flex items-center">
													<svg class="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600"
														xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<p class="text-sm font-medium text-gray-900">Your highest growth
														in a day is <span class="font-bold">14 customers</span></p>
												</div>
											</div>
										</div>

										<div class="bg-gray-100 rounded-lg">
											<div class="px-3 py-3">
												<div class="flex items-center">
													<svg class="flex-shrink-0 w-5 h-5 mr-2 text-indigo-600"
														xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<p class="text-sm font-medium text-gray-900">Your bounce rate is
														<span class="font-bold">54%</span> now
													</p>
												</div>
											</div>
										</div>
									</div>

									<div class="mt-5 text-right">
										<a href="#" title=""
											class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-gray-900">
											View all insights
											<svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none"
												viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7">
												</path>
											</svg>
										</a>
									</div>
								</div>
							</div>


							<Table></Table>

						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>


<script>



</script>
