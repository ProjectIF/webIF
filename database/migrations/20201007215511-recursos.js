'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("recursos", {
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
      link: {
        type: Sequelize.DataTypes.STRING,
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
      tipo_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'tipos',
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
    return queryInterface.dropTable("recursos");
  }
};
