const { Model, DataTypes } = require("sequelize");

class Recurso extends Model {
    static init(sequelize){
        super.init({
            titulo:{
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
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
        },{
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Tipo, { onDelete: 'CASCADE', hooks: true })
        this.belongsTo(models.Unidade, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Recurso;