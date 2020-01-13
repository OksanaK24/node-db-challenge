exports.seed = async (knex) => {
  await knex("resources").insert([   
    { name: "Resource #1", description: "Description for Resource #1"},
    { name: "Resource #2", description: "Description for Resource #2"},
    { name: "Resource #3", description: "Description for Resource #3"},
  ])
}