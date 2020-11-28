const Usuario = require("../models/Usuario");


const reg = async (req, res) => {
    const { email, senha, celular, nome } = req.body;
    try {
        const usuario = await Usuario.create({ email, senha, celular, nome },);
        usuario.setAttributes("senha", null)
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json(error.errors[0].message);
    }

}
const list = async (req, res) => {
    try {
        const usuario = await Usuario.findAll({attributes: { exclude: ['senha'] } });
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }

}
const upd = async (req,res) =>{
    const { email, celular, nome } = req.body;
    const id = req.params.id;
    try {
        const usuario = await Usuario.update({ email, celular, nome }, {where:{id:id}});
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}


const del = async (req,res) =>{
    const id = req.params.id;
    let msg = "";
    try {
        const usuario = await Usuario.destroy({where:{id:id}});
        if (usuario == 1){
           msg =  "exclusão realizada com sucesso"
        }else{
            msg =  "Não foi possivel excluir, tavez usuario ja esteja inexistente"
        }
        res.status(200).json({msg:msg});
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = { reg, upd, list, del }