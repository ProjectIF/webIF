const { Model, DataTypes } = require("sequelize");

class Unidade extends Model {
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
            titulo:{
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
        this.belongsTo(models.Disciplina, { onDelete: 'CASCADE', hooks: true });
        this.hasMany(models.Forum, { onDelete: 'CASCADE', hooks: true });
        this.hasMany(models.Recurso, { onDelete: 'CASCADE', hooks: true })
        this.hasMany(models.Avaliacao, { onDelete: 'CASCADE', hooks: true })

    }
    
}

module.exports = Unidade;