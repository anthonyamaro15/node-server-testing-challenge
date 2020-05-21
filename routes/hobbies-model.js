const db = require("../data/config-db");

function find() {
  return db("hobbies");
}

function add(hobby) {
  return db("hobbies").insert(hobby, "id");
}

function remove(id) {
  return db("hobbies").where({ id }).del();
}

module.exports = {
  find,
  add,
  remove,
};
