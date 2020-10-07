'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("postagens", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      texto: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      data: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
      },
      hora: {
        type: Sequelize.DataTypes.TIME,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
      },

      forum_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'foruns',
          },
          key: 'id'
        },
       
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
      postagem_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'postagens',
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
    return queryInterface.dropTable("postagens");
  }
};
