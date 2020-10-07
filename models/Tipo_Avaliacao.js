const { Model, DataTypes } = require("sequelize");

class Tipo_Avaliacao extends Model {
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
        this.hasMany(models.Avaliacao, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Tipo_Avaliacao;