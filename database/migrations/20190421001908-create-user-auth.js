'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAuths', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accessToken: {
        type: Sequelize.STRING
      },
      refreshToken: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserAuths');
  }
};