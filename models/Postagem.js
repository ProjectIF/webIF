const { Model, DataTypes } = require("sequelize");

class Postagem extends Model {
    static init(sequelize){
        super.init({
            texto:{
                type: DataTypes.TEXT,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            data:{
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            hora:{
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
        this.belongsTo(models.Forum, { onDelete: 'CASCADE', hooks: true })
        this.belongsTo(models.Postagem, { onDelete: 'CASCADE', hooks: true })
        this.belongsTo(models.Participante, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Postagem;