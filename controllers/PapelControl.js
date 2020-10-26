const Papel = require("../models/Papel");


const reg = async (req, res) => {
    const { descricao, configuracao_id } = req.body;
    console.log(configuracao_id)
    try {
        const papel = await Papel.create({ descricao, configuracao_id});
        res.status(200).json(papel);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }

}
const list = async (req, res) => {
    try {
        const papel = await Papel.findAll();
        res.status(200).json(papel);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const upd = async (req, res) => {
    const { descricao, configuracao_id } = req.body;
    const id = req.params.id;

    try {
        const papel = await Papel.update({ descricao, configuracao_id }, { where: { id: id } });
        res.status(200).json(papel);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


const del = async (req, res) => {
    const id = req.params.id;
    let msg = "";
    try {
        const papel = await Papel.destroy({ where: { id: id } });
        if (papel == 1) {
            msg = "exclusão realizada com sucesso"
        } else {
            msg = "Não foi possivel excluir, tavez papel ja esteja inexistente"
        }
        res.status(200).json({ msg: msg });
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = { reg, upd, list, del }