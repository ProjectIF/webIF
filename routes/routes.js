const express = require("express");
const Auth = require("../middlewares/auth")
const UsuarioControl = require("../controllers/UsuarioControl");
const ConfigControl = require("../controllers/ConfigControl");
const PapelControl = require("../controllers/PapelControl");

const routes = express.Router();


routes.get("/", Auth ,(req, res) => res.send("Bem vindo a API"));

//rotas usuarios
routes.post("/usuarios", UsuarioControl.reg );
routes.get("/usuarios", UsuarioControl.list );
routes.post("/usuarios/:id", UsuarioControl.upd);
routes.delete("/usuarios/:id", UsuarioControl.del);


//rotas Configuração
routes.post("/configs", ConfigControl.reg );
routes.get("/configs", ConfigControl.list );
routes.post("/configs/:id", ConfigControl.upd);
routes.delete("/configs/:id", ConfigControl.del);

//rotas Papel
routes.post("/papeis", PapelControl.reg );
routes.get("/papeis", PapelControl.list );
routes.post("/papeis/:id", PapelControl.upd);
routes.delete("/papeis/:id", PapelControl.del);







module.exports = routes;