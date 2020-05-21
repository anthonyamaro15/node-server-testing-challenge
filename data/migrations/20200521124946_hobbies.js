exports.up = function (knex) {
  return knex.schema.createTable("hobbies", (table) => {
    table.increments();
    table.string("hobby", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("hobbies");
};
