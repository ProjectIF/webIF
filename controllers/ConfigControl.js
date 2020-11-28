const Configuracao = require("../models/Configuracao");


const reg = async (req, res) => {
    const { titulo, manter_curso, manter_disciplina ,manter_unidade ,manter_recurso ,manter_tipo_recurso 
        ,manter_avaliacao ,manter_papel ,manter_participante,manter_usuario,manter_tipo_avaliacao } = req.body;
    try {
        const config = await Configuracao.create({ titulo,manter_curso, manter_disciplina ,manter_unidade ,manter_recurso ,manter_tipo_recurso,manter_avaliacao ,manter_papel ,manter_participante,manter_usuario,manter_tipo_avaliacao  });
        res.status(200).json(config);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }

}
const list = async (req, res) => {
    try {
        const config = await Configuracao.findAll();
        res.status(200).json(config);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const getOne = async (req, res) => {
    try {
        const config = await Configuracao.findOne({where:{id:req.params.id}});
        res.status(200).json(config);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const upd = async (req,res) =>{
    const {titulo, manter_curso, manter_disciplina ,manter_unidade ,manter_recurso ,manter_tipo_recurso, manter_avaliacao ,manter_papel ,manter_participante,manter_usuario,manter_tipo_avaliacao } = req.body;
    const id = req.params.id;
    
    try {
        const config = await Configuracao.update({ titulo, manter_curso, manter_disciplina ,manter_unidade ,manter_recurso ,manter_tipo_recurso 
            ,manter_avaliacao ,manter_papel ,manter_participante,manter_usuario,manter_tipo_avaliacao }, {where:{id:id}});
        res.status(200).json(config);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


const del = async (req,res) =>{
    const id = req.params.id;
    let msg = "";
    try {
        const config = await Configuracao.destroy({where:{id:id}});
        if (config == 1){
           msg =  "exclusão realizada com sucesso"
        }else{
            msg =  "Não foi possivel excluir, tavez config ja esteja inexistente"
        }
        res.status(200).json({msg:msg});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = { reg, upd, list, del ,getOne}