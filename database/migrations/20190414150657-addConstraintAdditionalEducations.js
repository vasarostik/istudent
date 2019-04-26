"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("AdditionalEducations", ["studentID"], {
      type: "foreign key",
      name: "FK_AdditionalEducations_studentID",
      references: {
        table: "Students",
        field: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "AdditionalEducations",
      "FK_AdditionalEducations_studentID"
    );
  }
};
