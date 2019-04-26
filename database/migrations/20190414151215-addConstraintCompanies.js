"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Companies", ["id"], {
        type: "foreign key",
        name: "FK_Companies_userID",
        references: {
          table: "Users",
          field: "id"
        }
      }),
      queryInterface.addConstraint("Companies", ["city"], {
        type: "foreign key",
        name: "FK_Companies_city",
        references: {
          table: "Cities",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Companies", "FK_Companies_userID"),
      queryInterface.removeConstraint("Companies", "FK_Companies_city")
    );
  }
};
