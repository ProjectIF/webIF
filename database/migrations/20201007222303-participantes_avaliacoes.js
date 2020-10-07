'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("participantes_avaliacoes", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nota: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
      },
      

      participante_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'participantes',
          },
          key: 'id'
        },
       
      },
      avaliacao_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'avaliacoes',
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
    return queryInterface.dropTable("participantes_avaliacoes");
  }
};
