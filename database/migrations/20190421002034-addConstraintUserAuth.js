"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("UserAuths", ["id"], {
      type: "foreign key",
      name: "FK_UserAuth_id",
      references: {
        table: "Users",
        field: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("UserAuth", "FK_UserAuth_id");
  }
};
