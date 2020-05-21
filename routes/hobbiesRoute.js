const express = require("express");
const Hobby = require("./hobbies-model");

const route = express.Router();

route.get("/", (req, res) => {
  Hobby.find()
    .then((hobbies) => {
      res.status(200).json(hobbies);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.post("/", (req, res) => {
  Hobby.add(req.body)
    .then((hobby) => {
      res.status(201).json(hobby);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  Hobby.remove(id)
    .then((hobby) => {
      res.status(200).json(hobby);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
