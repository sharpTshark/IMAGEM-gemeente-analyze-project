export default defineEventHandler(async (event) => {
	const { limit, postcode } = getQuery(event)

	return await $fetch(`${process.env.PDOK_API_URL}`, {
		method: 'GET',
		query: {
			f: 'json',
			limit: limit || 10,
			postcode,
		}
	});
})
