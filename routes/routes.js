const express = require("express");
const Auth = require("../middlewares/auth")
const UsuarioControl = require("../controllers/UsuarioControl");

const routes = express.Router();


routes.get("/", Auth ,(req, res) => res.send("Bem vindo a API"));

//rotas usuarios
routes.post("/usuarios", UsuarioControl.reg );
routes.get("/usuarios", UsuarioControl.list );
routes.post("/usuarios/:id", UsuarioControl.upd);
routes.delete("/usuarios/:id", UsuarioControl.del);


module.exports = routes;