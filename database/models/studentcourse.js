"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define(
    "StudentCourse",
    {
      courseID: DataTypes.INTEGER,
      studentID: DataTypes.INTEGER
    },
    {}
  );
  StudentCourse.associate = function(models) {
    // associations can be defined here
  };
  return StudentCourse;
};
