const db = require("../data/db-config")

// The list of tasks should include the project name and project description.
function find() {
    const tasks = db("tasks")
                            .join("projects", "projects.id", "tasks.project_id")
                            .select("tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description as project_description")
	return tasks.map((task) => {
        return {...task, completed: task.completed === 0 ? false : true}
    })
}

function findByProject(project_id) {
    const tasks = db("tasks")
                            .join("projects", "projects.id", "tasks.project_id")
                            .where({ project_id  })
                            .select("tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description as project_description")
	return tasks.map((task) => {
        return {...task, completed: task.completed === 0 ? false : true}
    })
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