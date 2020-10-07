const Sequelize = require("sequelize");
const dbConfig = require("./config");
const Usuario = require("../models/Usuario");
const Configuracao = require("../models/Configuracao");
const Papel = require("../models/Papel");
const Disciplina = require("../models/Disciplina");
const Curso = require("../models/Curso");
const Unidade = require("../models/Unidade");
const Participante = require("../models/Participante");
const Postagem = require("../models/Postagem");
const Forum = require("../models/Forum");
const Tipo = require("../models/Tipo");
const Tipo_Avaliacao = require("../models/Tipo_Avaliacao");
const Avaliacao = require("../models/Avaliacao");
const Recurso = require("../models/Recurso");
const Participante_Avaliacao = require("../models/Participante_avaliacao");


const connection = new Sequelize(dbConfig);


Usuario.init(connection);
Configuracao.init(connection);
Papel.init(connection);
Disciplina.init(connection);
Curso.init(connection);
Unidade.init(connection);
Participante.init(connection);
Postagem.init(connection);
Forum.init(connection);
Tipo.init(connection);
Avaliacao.init(connection);
Tipo_Avaliacao.init(connection);
Participante_Avaliacao.init(connection);
Recurso.init(connection);


Usuario.associate(connection.models);
Configuracao.associate(connection.models);
Papel.associate(connection.models);
Disciplina.associate(connection.models);
Curso.associate(connection.models);
Unidade.associate(connection.models);
Participante.associate(connection.models);
Postagem.associate(connection.models);
Forum.associate(connection.models);
Tipo.associate(connection.models);
Avaliacao.associate(connection.models);
Recurso.associate(connection.models);
Tipo_Avaliacao.associate(connection.models);
Participante_Avaliacao.associate(connection.models);


module.exports = connection;




