const { Model, DataTypes } = require("sequelize");

class Forum extends Model {
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
            data_inicio:{
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        msg: "Campo não pode estar vazio"
                    },
                },
            },
            data_fim:{
                type: DataTypes.DATE,
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
        this.belongsTo(models.Unidade, { onDelete: 'CASCADE', hooks: true })
        this.hasMany(models.Postagem, { onDelete: 'CASCADE', hooks: true })
    }
    
}

module.exports = Forum;