exports.seed = function (knex) {
  // Inserts seed entries
  return knex("hobbies").insert([
    { hobby: "this is hobby one" },
    { hobby: "this is hobby two" },
    { hobby: "this is hobby three" },
    { hobby: "this is hobby four" },
  ]);
};
