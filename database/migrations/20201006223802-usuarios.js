'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuarios",{
      id :{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type:Sequelize.DataTypes.STRING,
        allowNull: false,
      },
       email:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      celular: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    })
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("usuarios");
  }
};
