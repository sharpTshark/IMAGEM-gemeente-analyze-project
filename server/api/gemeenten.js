export default defineEventHandler(async (event) => {
	const { limit } = getQuery(event)

	return await $fetch(`${process.env.PDOK_API_URL}`, {
		method: 'GET',
		query: {
			f: 'json',
			limit: limit || 10
		}
	});
})
