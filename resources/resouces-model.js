const db = require("../data/db-config")

function find() {
	return db("resources").select()
}

async function add(data) {
	const [id] = await db("resources").insert(data)
	return db("resources").where({ id }).select()
}

module.exports = {
	find,
	add,
}