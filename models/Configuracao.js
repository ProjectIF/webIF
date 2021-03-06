const { Model, DataTypes } = require('sequelize');

class Configuracao extends Model {
    static init(sequelize) {
        super.init({
            titulo: {
                type: DataTypes.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },

                },
            }, manter_curso: {
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
                    
                },
            },
            

        }, {
            sequelize,
            tableName:"configuracoes"
            
        })
    }
    static associate(models) {
        this.hasMany(models.Papel, { onDelete: 'CASCADE', hooks: true });
        
    }
}

module.exports = Configuracao;