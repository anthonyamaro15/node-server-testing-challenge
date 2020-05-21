const express = require("express");
const hobbiesRoute = require("../routes/hobbiesRoute");

const server = express();

server.use(express.json());

server.use("/api", hobbiesRoute);

module.exports = server;
