exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
  table.text("name").notNullable();
});

exports.down = knex => knex.schema.dropTable("tags");