"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentProject = sequelize.define(
    "StudentProject",
    {
      studentID: DataTypes.INTEGER,
      projectID: DataTypes.INTEGER
    },
    {}
  );
  StudentProject.associate = function(models) {
    // associations can be defined here
  };
  return StudentProject;
};
