"use strict";
module.exports = (sequelize, DataTypes) => {
  const VacancyTechnology = sequelize.define(
    "VacancyTechnology",
    {
      vacancyID: DataTypes.INTEGER,
      technologyID: DataTypes.INTEGER
    },
    {}
  );
  VacancyTechnology.associate = function(models) {
    VacancyTechnology.belongsTo(models.Technology),
    VacancyTechnology.belongsTo(models.Vacancy)
  };
  return VacancyTechnology;
};
