exports.up = async function(knex) {

    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.string("name")
            .notNullable()
            .unique()
        table.string("description")
        table.boolean("completed")
            .defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.string("name")
            .notNullable()
            .unique()
        table.string("description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.string("description")
            .notNullable()
        table.string("notes")
        table.boolean("completed")
            .defaultTo(false)
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["project_id", "resource_id"])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
