const express = require("express");
const Hobby = require("./hobbies-model");

const route = express.Router();

route.get("/", (req, res) => {
  Hobby.find().then((hobbies) => {
    res.status(200).json(hobbies);
  });
});

module.exports = route;
