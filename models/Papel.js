const { Model, DataTypes } = require("sequelize");

class Papel extends Model {
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
            sequelize,
            tableName:"papeis"
        })
    }
    static associate(models) {
        this.belongsTo(models.Configuracao, { onDelete: 'CASCADE', hooks: true});
        this.hasMany(models.Participante, { onDelete: 'CASCADE', hooks: true });
    }
    
}

module.exports = Papel;