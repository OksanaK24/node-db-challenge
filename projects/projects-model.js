const db = require("../data/db-config")

function find() {
    const projects = db("projects").select()
	return projects.map((project) => {
        return {...project, completed: project.completed === 0 ? false : true}
    })
}

async function add(data) {
	const [id] = await db("projects").insert(data)
	return db("projects").where({ id }).select()
}

module.exports = {
	find,
	add,
}