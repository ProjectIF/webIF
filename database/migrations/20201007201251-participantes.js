'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("participantes", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      matricula: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
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
      usuario_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id'
        },
      
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      papel_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'papeis',
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
    return queryInterface.dropTable("participantes");
  }
};
