const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs')
class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                unique: {
                    msg: "Email já Cadastrado"
                },
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                    isEmail: {
                        msg: "Campo email invalido "
                    },
                   
                },


            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull:{
                        msg: "Campo senha não pode estar vazio"
                    },
                    notEmpty: {
                        msg: "Campo senha não pode estar vazio"
                    },
                    len:{
                        args:[6],
                        msg:"A senha deve conter no minimo 6 caracteres",
                    },
                    set(value) {
                        this.setDataValue('senha',bcrypt.hashSync(value, 10));
                    }
                },
            },
            confirmar_senha :{
                type:DataTypes.VIRTUAL,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                    len:{
                        args:[6],
                        msg:"A senha deve conter no minimo 6 caracteres",
                    },
                    set(value) {
                        this.setDataValue('confirmar_senha',bcrypt.hashSync(value, 10));

                    }
                    
                },
            },
          
            celular: {
                type: DataTypes.BIGINT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                    len:{
                        args:[11,11],
                        msg : "Celular deve conter  9 caracteres mais DDD da sua cidade"
                    },
                    isNumeric: {
                        args:true,
                        msg : "Apenas numeros permitidos "
                    }, 
                   

                },

            },

        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Participante, { onDelete: 'CASCADE', hooks: true });
    }
}

module.exports = Usuario;