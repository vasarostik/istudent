"use strict";
module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define(
    "Technology",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Technology.associate = function(models) {
    Technology.hasMany(models.StudentTechnology),
    Technology.hasMany(models.VacancyTechnology),
    Technology.hasMany(models.CourseTechnology)
  };
  return Technology;
};
