const Curso = require("../models/Curso");


const reg = async (req, res) => {
    const { nome, turno, horas } = req.body;
    try {
        const curso = await Curso.create({ nome, turno, horas });
        res.status(200).json(curso);
    } catch (error) {
        res.status(400).json(error.errors[0].message);
    }

}

const list = async (req, res) => {
    try {
        const curso = await Curso.findAll();
        res.status(200).json(curso);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const getOne = async (req, res) => {
    try {
        const curso = await Curso.findOne({ where: { id: req.params.id } });
        res.status(200).json(curso);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const upd = async (req, res) => {
    const { nome, turno, horas } = req.body;
    const id = req.params.id;
    try {
        const curso = await Curso.update({ nome, turno, horas }, { where: { id: id } });
        res.status(200).json(curso);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


const del = async (req, res) => {
    const id = req.params.id;
    let msg = "";
    try {
        const curso = await Curso.destroy({ where: { id: id } });
        if (curso == 1) {
            msg = "exclusão realizada com sucesso"
        } else {
            msg = "Não foi possivel excluir, tavez curso ja esteja inexistente"
        }
        res.status(200).json({ msg: msg });
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = { reg, upd, list, getOne, del }