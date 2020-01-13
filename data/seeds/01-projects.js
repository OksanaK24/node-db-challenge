exports.seed = async (knex) => {
  await knex("projects").insert([   
    { name: "Project #1", description: "Description for project #1", completed: false },
    { name: "Project #2", description: "Description for project #2", completed: false },
    { name: "Project #3", description: "Description for project #3", completed: true },
    { name: "Project #4", description: "Description for project #4", completed: false },
  ])
}