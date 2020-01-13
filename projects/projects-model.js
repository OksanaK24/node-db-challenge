const db = require("../data/db-config")

function find() {
	return db("projects").select()
}

async function add(data) {
	const [id] = await db("projects").insert(data)
	return db("projects").where({ id }).select()
}

module.exports = {
	find,
	add,
}