const express = require("express");
const Auth = require("../middlewares/auth")
const UsuarioControl = require("../controllers/UsuarioControl");
const ConfigControl = require("../controllers/ConfigControl");
const PapelControl = require("../controllers/PapelControl");
const CursoControl = require("../controllers/CursoControl");
const DisciplinaControl = require("../controllers/DisciplinaControl");
const ParticipanteControl = require("../controllers/ParticipanteControl");

const routes = express.Router();


routes.get("/" ,(req, res) => res.send("Bem vindo a API"));

//rotas usuarios
routes.post("/usuarios", UsuarioControl.reg );
routes.get("/usuarios", UsuarioControl.list );
routes.post("/usuarios/:id", UsuarioControl.upd);
routes.delete("/usuarios/:id", UsuarioControl.del);


//rotas Configuração
routes.post("/configs", ConfigControl.reg );
routes.get("/configs", ConfigControl.list );
routes.get("/configs/:id", ConfigControl.getOne);
routes.post("/configs/:id", ConfigControl.upd);
routes.delete("/configs/:id", ConfigControl.del);

//rotas Papel
routes.post("/papeis", PapelControl.reg );
routes.get("/papeis", PapelControl.list );
routes.get("/papeis/:id", PapelControl.getOne );
routes.post("/papeis/:id", PapelControl.upd);
routes.delete("/papeis/:id", PapelControl.del);

//rotas Curso
routes.post("/cursos", CursoControl.reg );
routes.get("/cursos", CursoControl.list );
routes.get("/cursos/:id", CursoControl.getOne );
routes.post("/cursos/:id", CursoControl.upd);
routes.delete("/cursos/:id", CursoControl.del);


//rotas Disciplinas
routes.post("/disciplinas", DisciplinaControl.reg );
routes.get("/disciplinas", DisciplinaControl.list );
routes.get("/disciplinas/:id", DisciplinaControl.getOne );
routes.post("/disciplinas/:id", DisciplinaControl.upd);
routes.delete("/disciplinas/:id", DisciplinaControl.del);

//rotas Participantes
routes.post("/participantes", ParticipanteControl.reg );
routes.get("/participantes", ParticipanteControl.list );
routes.get("/participantes/:id", ParticipanteControl.getOne );
routes.post("/participantes/:id", ParticipanteControl.upd);
routes.delete("/participantes/:id", ParticipanteControl.del);







module.exports = routes;