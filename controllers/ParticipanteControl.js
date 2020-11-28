const Participante = require("../models/Participante");
const Usuario = require("../models/Usuario");
const Papel = require("../models/Papel");
const Disciplina = require("../models/Disciplina");


const reg = async (req, res) => {
    const { usuario, papel, matricula, disciplina } = req.body;
    let u = undefined
    let p = undefined
    let d = undefined

  
        try {
            u = await Usuario.findByPk(usuario);
            p = await Papel.findByPk(papel);
            d = await Disciplina.findByPk(disciplina);

            if (u) {
                if (p) {
                    if (d) {
                        const participante = await Participante.create({ UsuarioId: u.id, PapelId: p.id, matricula: matricula, DisciplinaId: d.id });
                        res.status(200).json("Participantes inseridos com sucesso");
                    } else {
                        throw "Disicplina não existe"
                    }
                } else {
                    throw "Papel não existe"
                }
            } else {
                throw "Usuario não existe"
            }
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }

    
 
   
}
const list = async (req, res) => {
    try {
        const participante = await Participante.findAll({include:[{model:Papel},{model:Disciplina},{model:Usuario, attributes: { exclude: ['senha']}} ]});
        res.status(200).json(participante);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const getOne = async (req, res) => {
    const id = req.params.id ;
    try {
        const participante = await Participante.findOne({ where: { id:id }, include:[{model:Papel},{model:Disciplina},{model:Usuario, attributes: { exclude: ['senha'] }}]  });
        res.status(200).json(participante);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const upd = async (req, res) => {
    const { usuario, papel, matricula, disciplina } = req.body;
    const id = req.params.id;
    let u = undefined
    let p = undefined
    let d = undefined

    try {
        u = await Usuario.findByPk(usuario);
        p = await Papel.findByPk(papel);
        d = await Disciplina.findByPk(disciplina);

        if (u) {
            if (p) {
                if (d) {
                    const participante = await Participante.update({ UsuarioId: u.id, PapelId: p.id, matricula: matricula, DisciplinaId: d.id }, { where: { id: id } });
                    res.status(200).json(participante);
                } else {
                    throw "Disicplina não existe"
                }
            } else {
                throw "Papel não existe"
            }
        } else {
            throw "Usuario não existe"
        }


    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


const del = async (req, res) => {
    const id = req.params.id;
    let msg = "";
    try {
        const participante = await Participante.destroy({ where: { id: id } });
        if (participante == 1) {
            msg = "exclusão realizada com sucesso"
        } else {
            msg = "Não foi possivel excluir, tavez participante ja esteja inexistente"
        }
        res.status(200).json({ msg: msg });
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = { reg, upd, getOne, list, del }