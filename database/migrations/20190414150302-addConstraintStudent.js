"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("Students", ["id"], {
        type: "foreign key",
        name: "FK_Students_id",
        references: {
          table: "Users",
          field: "id"
        }
      }),
      queryInterface.addConstraint("Students", ["city"], {
        type: "foreign key",
        name: "FK_Students_city",
        references: {
          table: "Cities",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint("Student", "FK_Students_id"),
      queryInterface.removeConstraint("Student", "FK_Students_city")
    );
  }
};
