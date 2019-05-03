"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentVacancy = sequelize.define(
    "StudentVacancy",
    {
      studentID: DataTypes.INTEGER,
      vacancyID: DataTypes.INTEGER
    },
    {}
  );
  StudentVacancy.associate = function(models) {
    StudentVacancy.belongsTo(models.Student),
    StudentVacancy.belongsTo(models.Vacancy)
  };
  return StudentVacancy;
};
