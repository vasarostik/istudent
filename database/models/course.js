"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      companyID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      link: DataTypes.STRING
    },
    {}
  );
  Course.associate = function(models) {
    Course.belongsTo(models.Company)
    Course.hasMany(models.StudentCourse),
    Course.hasMany(models.CourseSkill),
    Course.hasMany(models.CourseTechnology),
    Course.hasMany(models.CoursePartner)
  };
  return Course;
};
