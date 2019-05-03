"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vacancy = sequelize.define(
    "Vacancy",
    {
      companyID: DataTypes.INTEGER,
      positionID: DataTypes.INTEGER,
      salaryFrom: DataTypes.INTEGER,
      salaryTo: DataTypes.INTEGER,
      detail: DataTypes.TEXT
    },
    {}
  );
  Vacancy.associate = function(models) {
    Vacancy.belongsTo(models.Company),
    Vacancy.belongsTo(models.Position),
    Vacancy.hasMany(models.StudentVacancy),
    Vacancy.hasMany(models.VacancySkill),
    Vacancy.hasMany(models.VacancyTechnology)
  };
  return Vacancy;
};
