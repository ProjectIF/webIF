const { Model, DataTypes } = require('sequelize');

class Configuracao extends Model {
    static init(sequelize) {
        super.init({
            manter_curso: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },

                },
            },
            manter_disciplina: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_unidade: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_recurso: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_tipo_recurso: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_avaliacao: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_papel: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },

            manter_participante: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_usuario: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            manter_tipo_avaliacao: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                    v
                },
            },


        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Papel, { onDelete: 'CASCADE', hooks: true });
        
    }
}

module.exports = Configuracao;