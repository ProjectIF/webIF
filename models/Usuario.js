

const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome : {
                type:DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    validate: {
                        notEmpty: {
                            msg: "Campo não pode estar vazio"
                        },
                        isEmail: {
                            msg: "Campo email invalido "
                        }
                    },
                    unique: {
                        msg: "Email já Cadastrado"
                    }
                }
            },
            senha : {
                type:DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                    min: {
                        msg: "A senha deve conter no minimo 8 caracteres ",
                    }
                },
            },
            celular : {
                type:DataTypes.BIGINT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },  
                    
                },
               
            },

        },{
            sequelize
        })
    }
}

module.exports = Usuario;