const db = require("../data/db-config")

// The list of tasks should include the project name and project description.
function find() {
	return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select("tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description as project_description")
}

function findByProject(project_id) {
	return db("tasks")
		.join("projects", "projects.id", "tasks.project_id")
		.where({ project_id  })
		.select("tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description as project_description")
}

async function add(data) {
	const [id] = await db("tasks").insert(data)
	return db("tasks").where({ id }).select()
}

module.exports = {
    find,
    findByProject,
	add,
}