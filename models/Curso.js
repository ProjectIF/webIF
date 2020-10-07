const { Model, DataTypes } = require("sequelize");

class Curso extends Model {
    static init(sequelize){
        super.init({
            nome:{
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            turno:{
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            horas:{
                type: DataTypes.INTEGER,
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
    static associate(models) {
        this.hasMany(models.Disciplina, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Curso;