const express = require("express");



const routes = express.Router();


routes.get("/", (req, res) => res.send("Bem vindo a API"));


module.exports = routes;