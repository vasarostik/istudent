"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      city: DataTypes.INTEGER
    },
    {}
  );
  Student.associate = function(models) {
    Student.belongsTo(models.User),
    Student.hasOne(models.City),
    Student.hasMany(models.Education),
    Student.hasMany(models.AdditionalEducation),
    Student.hasMany(models.StudentProject),
    Student.hasMany(models.WorkExperience),
    Student.hasMany(models.StudentSkill),
    Student.hasMany(models.StudentTechnology),
    Student.hasMany(models.StudentVacancy),
    Student.hasMany(models.StudentCourse)
  };
  return Student;
};
