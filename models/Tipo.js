const { Model, DataTypes } = require("sequelize");

class Tipo extends Model {
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
        },{
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Recurso, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Tipo;