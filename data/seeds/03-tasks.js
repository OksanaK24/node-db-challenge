exports.seed = async (knex) => {
  await knex("tasks").insert([   
    { description: "Task #1", notes: "Notes for Task #1", completed: true, project_id: 1 },
    { description: "Task #2", notes: "Notes for Task #2", completed: false, project_id: 1 },
    { description: "Task #3", notes: "Notes for Task #3", completed: true, project_id: 2 },
    { description: "Task #4", notes: "Notes for Task #4", completed: false, project_id: 2 },
    { description: "Task #5", notes: "Notes for Task #5", completed: false, project_id: 2 },
    { description: "Task #6", notes: "Notes for Task #6", completed: true, project_id: 3 },
    { description: "Task #7", notes: "Notes for Task #7", completed: true, project_id: 3 },
    { description: "Task #8", notes: "Notes for Task #8", completed: true, project_id: 3 },
    { description: "Task #9", notes: "Notes for Task #9", completed: false, project_id: 4 },
  ])
}