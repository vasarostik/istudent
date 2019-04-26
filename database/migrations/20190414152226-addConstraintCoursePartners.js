"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.addConstraint("CoursePartners", ["courseID"], {
        type: "foreign key",
        name: "FK_CoursePartners_courseID",
        references: {
          table: "Courses",
          field: "id"
        }
      }),
      queryInterface.addConstraint("CoursePartners", ["companyID"], {
        type: "foreign key",
        name: "FK_CoursePartners_companyID",
        references: {
          table: "Companies",
          field: "id"
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.removeConstraint(
        "CoursePartners",
        "FK_CoursePartners_courseID"
      ),
      queryInterface.removeConstraint(
        "CoursePartners",
        "FK_CoursePartners_companyID"
      )
    );
  }
};
