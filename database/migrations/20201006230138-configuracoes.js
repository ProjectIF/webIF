'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("configuracoes", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,

      }, manter_curso: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_disciplina: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_unidade: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_recurso: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_tipo_recurso: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_avaliacao: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,


      },
      manter_papel: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,


      },

      manter_participante: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

      },
      manter_usuario: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
      manter_tipo_avaliacao: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,

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
    return queryInterface.dropTable("configuracoes");
  }
};
