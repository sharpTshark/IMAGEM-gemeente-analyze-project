export default defineEventHandler(async (event) => {
	const { limit, postcode, year } = getQuery(event)

	let query = {
		f: 'json',
		limit: limit || 10,
	}

	if (postcode) {
		query.postcode = postcode
	}

	if (year) {
		query.jaarcode = year
	}

	return await $fetch(`${process.env.PDOK_API_URL}`, {
		method: 'GET',
		query
	});
})
