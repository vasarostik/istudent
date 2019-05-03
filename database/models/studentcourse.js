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
    StudentCourse.belongsTo(models.Student),
    StudentCourse.belongsTo(models.Course)
  };
  return StudentCourse;
};
