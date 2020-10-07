'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("disciplinas", {
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
      ementa: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      horas: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      periodo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      calculo_avaliacoes: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
      },
      curso_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'cursos',
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
