exports.seed = async (knex) => {
  await knex("resources").insert([   
    { name: "Tablet", description: "Needed"},
    { name: "Just me", description: "Who else will do everything? =)"},
    { name: "Friends", description: "My-my-my"},
  ])
}