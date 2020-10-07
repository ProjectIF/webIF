const { Model, DataTypes } = require("sequelize");

class Participante_Avaliacao extends Model {
    static init(sequelize){
        super.init({
            nota:{
                type: DataTypes.FLOAT,
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
    }
    
}

module.exports = Participante_Avaliacao;