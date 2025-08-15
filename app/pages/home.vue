<template>
	<div class="flex flex-col">
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

						<div class="flex-1 max-w-xs ml-auto lg:hidden">
							<label for="" class="sr-only"> Search </label>
							<div class="relative">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
									</svg>
								</div>

								<input type="search" name="" id=""
									class="block w-full py-2 pl-10 text-white placeholder-gray-400 bg-gray-900 border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="Search here" />
							</div>
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
											<span class="text-sm font-medium text-white truncate"> Wade Warren
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
							<a href="#" title=""
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
								<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
									</path>
								</svg>
								Dashboard
							</a>

							<a href="#" title=""
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
								<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
									</path>
								</svg>
								Analytics
								<svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
								</svg>
							</a>

							<a href="#" title=""
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
								<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
									</path>
								</svg>
								Products
								<svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
								</svg>
							</a>

							<a href="#" title=""
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
								<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
									</path>
								</svg>
								Customers
								<svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
								</svg>
							</a>

							<a href="#" title=""
								class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100">
								<svg class="w-6 h-6 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
									</path>
								</svg>
								Support
								<svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none"
									viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
								</svg>
							</a>
						</div>

						<div class="flex-1 hidden max-w-xs ml-auto lg:block">
							<label for="" class="sr-only"> Search </label>
							<div class="relative">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
									</svg>
								</div>

								<input type="search" name="" id=""
									class="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
									placeholder="Search here" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div class="flex-1 overflow-x-hidden">
			<main>
				<div class="py-6">
					<div class="px-4 mx-auto max-w-7xl">
						<div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-9">
							<div
								class="overflow-hidden bg-white border border-gray-200 divide-y divide-gray-200 lg:col-span-3 rounded-xl">
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
							</div>

							<div class="overflow-hidden bg-white border border-gray-200 lg:col-span-6 rounded-xl">
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
							</div>

							<div class="overflow-hidden bg-white border border-gray-200 lg:col-span-3 rounded-xl">
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
							</div>

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

							<div class="lg:col-span-9">
								<div class="flex items-center justify-between">
									<p class="flex-1 text-base font-bold text-gray-900">Latest Transactions</p>

									<div class="inline-flex items-center justify-end">
										<label for="sort" class="flex-shrink-0 text-sm font-medium text-gray-900">
											Sort by: </label>
										<select id="sort" name="sort"
											class="block w-full py-2 pl-1 pr-10 text-base bg-transparent border-gray-300 border-none rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
											<option>Recent</option>
										</select>
									</div>
								</div>

								<div class="flex flex-col mt-4">
									<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
											<div class="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-xl">
												<table class="min-w-full bg-white lg:divide-y lg:divide-gray-200">
													<thead class="hidden lg:table-header-group">
														<tr>
															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	ID
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	Product
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	Customer Name
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	Date
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	Price
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th
																class="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
																<div class="flex items-center">
																	Status
																	<svg class="w-4 h-4 ml-2"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
																	</svg>
																</div>
															</th>

															<th class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
																<span class="sr-only"> Actions </span>
															</th>
														</tr>
													</thead>

													<tbody class="divide-y divide-gray-200">
														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#29345</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png"
																		alt="" />
																	Clarity Landing UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																James Dorgan</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																07 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$59.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Complete
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$59.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Complete
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#23848</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-ecommerce-logo.png"
																		alt="" />
																	Clarity eCommerce UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Savannah Nguyen</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																07 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$99.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Complete
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$99.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Complete
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#23466</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-ecommerce-logo.png"
																		alt="" />
																	Clarity eCommerce UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Dianne Russell</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																06 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$59.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-yellow-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Pending
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$59.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-yellow-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Pending
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#19394</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png"
																		alt="" />
																	Clarity Landing UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Annette Black</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																05 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$49.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-gray-300"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Canceled
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$49.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-gray-300"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Canceled
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#19217</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png"
																		alt="" />
																	Clarity Landing UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Jane Cooper</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																05 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$59.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Complete
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$59.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Complete
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#18333</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-landing-logo.png"
																		alt="" />
																	Clarity Landing UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Floyd Miles</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																04 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$49.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Complete
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$49.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-green-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Complete
																	</div>
																</div>
															</td>
														</tr>

														<tr>
															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																#17482</td>

															<td
																class="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
																<div class="inline-flex items-center">
																	<img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
																		src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/3/clarity-ecommerce-logo.png"
																		alt="" />
																	Clarity eCommerce UI Kit
																</div>
																<div class="space-y-1 lg:hidden pl-11">
																	<p class="text-sm font-medium text-gray-500">
																		#29345</p>
																	<p class="text-sm font-medium text-gray-500">07
																		January, 2022</p>
																</div>
															</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																Cody Fisher</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																04 January, 2022</td>

															<td
																class="hidden px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																$99.00</td>

															<td
																class="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
																<div class="inline-flex items-center">
																	<svg class="mr-1.5 h-2.5 w-2.5 text-yellow-500"
																		fill="currentColor" viewBox="0 0 8 8">
																		<circle cx="4" cy="4" r="3" />
																	</svg>
																	Pending
																</div>
															</td>

															<td
																class="px-4 py-4 text-sm font-medium text-right text-gray-900 sm:px-6 whitespace-nowrap">
																<button type="button"
																	class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
																	<svg class="w-6 h-6"
																		xmlns="http://www.w3.org/2000/svg" fill="none"
																		viewBox="0 0 24 24" stroke="currentColor"
																		stroke-width="2">
																		<path stroke-linecap="round"
																			stroke-linejoin="round"
																			d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
																		</path>
																	</svg>
																</button>
																<div class="mt-1 lg:hidden">
																	<p>$99.00</p>
																	<div
																		class="inline-flex items-center justify-end mt-1">
																		<svg class="mr-1.5 h-2.5 w-2.5 text-yellow-500"
																			fill="currentColor" viewBox="0 0 8 8">
																			<circle cx="4" cy="4" r="3" />
																		</svg>
																		Pending
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
