const { Model, DataTypes } = require("sequelize");

class Disciplina extends Model {
    static init(sequelize) {
        super.init({
            descricao: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            ementa: {
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            horas: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            periodo: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            calculo_avaliacoes: {
                type: DataTypes.FLOAT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
          
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Curso, { onDelete: 'CASCADE', hooks: true });
        this.hasMany(models.Unidade, { onDelete: 'CASCADE', hooks: true });
    }

}

module.exports = Disciplina;