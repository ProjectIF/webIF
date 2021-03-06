'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("unidades", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
     
      disciplina_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'disciplinas',
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },

      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("unidades");
  }
};
