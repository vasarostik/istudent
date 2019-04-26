"use strict";
module.exports = (sequelize, DataTypes) => {
  const VacancySkill = sequelize.define(
    "VacancySkill",
    {
      vacancyID: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER
    },
    {}
  );
  VacancySkill.associate = function(models) {
    // associations can be defined here
  };
  return VacancySkill;
};
