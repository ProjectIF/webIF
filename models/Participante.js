const { Model, DataTypes } = require("sequelize");

class Participante extends Model {
    static init(sequelize){
        super.init({
            matricula:{
                type: DataTypes.STRING,
               
            },
        },{
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Papel, { onDelete: 'CASCADE', hooks: true });
        this.belongsTo(models.Usuario, { onDelete: 'CASCADE', hooks: true });
        this.belongsTo(models.Disciplina, { onDelete: 'CASCADE', hooks: true });
        this.hasMany(models.Postagem, { onDelete: 'CASCADE', hooks: true });
        this.belongsToMany(models.Avaliacao, { through: models.Participante_Avaliacao, as: 'avaliacao' , onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Participante;