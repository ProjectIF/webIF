'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cursos", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      turno: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      horas: {
        type: Sequelize.DataTypes.INTEGER,
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
    return queryInterface.dropTable("cursos");
  }
};
