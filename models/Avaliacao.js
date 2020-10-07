const { Model, DataTypes } = require("sequelize");

class Avaliacao extends Model {
    static init(sequelize){
        super.init({
            descricao:{
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            link:{
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            data_inicial:{
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            data_final:{
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            hora_inicial:{
                type: DataTypes.TIME,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            hora_final:{
                type: DataTypes.TIME,
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
        this.belongsTo(models.Tipo_Avaliacao, { onDelete: 'CASCADE', hooks: true })
        this.belongsTo(models.Unidade, { onDelete: 'CASCADE', hooks: true })
        this.belongsToMany(models.Participante, { through: models.Participante_Avaliacao, as: 'participante' , onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Avaliacao;