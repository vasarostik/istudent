"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("WorkExperiences", ["studentID"], {
        type: "foreign key",
        name: "FK_WorkExperiences_studentID",
        references: {
          table: "Students",
          field: "id"
        }
      }),
      queryInterface.addConstraint("WorkExperiences", ["projectID"], {
        type: "foreign key",
        name: "FK_WorkExperiences_projectID",
        references: {
          table: "Projects",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint(
        "WorkExperiences",
        "FK_WorkExperiences_studentID"
      ),
      queryInterface.removeConstraint(
        "WorkExperiences",
        "FK_WorkExperiences_projectID"
      )
    );
  }
};
