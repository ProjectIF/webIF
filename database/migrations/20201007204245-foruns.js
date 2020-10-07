'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("foruns", {
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
      data_inicio: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      data_final: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },

      unidade_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'unidades',
          },
          key: 'id'
        },
       
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
    return queryInterface.dropTable("foruns");
  }
};
