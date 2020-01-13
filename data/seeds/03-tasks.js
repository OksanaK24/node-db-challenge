exports.seed = async (knex) => {
  await knex("tasks").insert([   
    { description: "Buy tickets", notes: "", completed: true, project_id: 1 },
    { description: "Find interesting places", notes: "Check videos, posts etc", completed: false, project_id: 1 },
    { description: "Find where to live", notes: "Depends on the task #2", completed: false, project_id: 1 },
    { description: "Learn back end", notes: "Repeat + continue learning", completed: false, project_id: 2 },
    { description: "Repeat previous topics", notes: "HTML, CSS, JS (React)", completed: false, project_id: 2 },
    { description: "Cook", notes: "Soup, salad, 2nd dish", completed: true, project_id: 3 },
    { description: "Clean", notes: "", completed: true, project_id: 3 },
  ])
}