const Disciplina = require("../models/Disciplina");
const Curso = require("../models/Curso");


const reg = async (req, res) => {
    const { descricao, ementa, horas, periodo, calculo_avaliacoes, curso } = req.body;
    try {
        const resp = await Curso.findByPk(curso)
        if (resp) {
            const disciplina = await Disciplina.create({ descricao, ementa, horas, periodo, calculo_avaliacoes, CursoId: resp.id });
            res.status(200).json(disciplina);
        } else {
            throw "Curso não existe"
        }
    } catch (error) {
        console.log("erro :", error)
        res.status(400).json(error.errors[0].message);
    }

}

const list = async (req, res) => {
    try {
        const disciplina = await Disciplina.findAll({include:[{model:Curso}]});
        res.status(200).json(disciplina);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.errors[0].message);
    }

}
const getOne = async (req, res) => {
    try {
        const disciplina = await Disciplina.findOne({ where: { id: req.params.id },include:[{model:Curso}] });
        res.status(200).json(disciplina);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.errors[0].message);
    }

}
const upd = async (req, res) => {
    const { descricao, ementa, horas, periodo, calculo_avaliacoes, curso } = req.body;
    const id = req.params.id;
    try {
        const resp = await Curso.findByPk(curso)
        if (resp) {
            const disciplina = await Disciplina.update({ descricao, ementa, horas, periodo, calculo_avaliacoes, CursoId: resp.id }, { where: { id: id } });
            res.status(200).json(disciplina);
        } else {
            throw "Curso não existe"
        }

    } catch (error) {
        console.log(error)
        res.status(400).json(error.errors[0].message);
    }
}


const del = async (req, res) => {
    const id = req.params.id;
    let msg = "";
    try {
        const disciplina = await Disciplina.destroy({ where: { id: id } });
        if (disciplina == 1) {
            msg = "exclusão realizada com sucesso"
        } else {
            msg = "Não foi possivel excluir, tavez disciplina ja esteja inexistente"
        }
        res.status(200).json({ msg: msg });
    } catch (error) {
        console.log(error)
        res.status(400).json(error.errors[0].message);
    }
}

module.exports = { reg, upd, list, getOne, del }