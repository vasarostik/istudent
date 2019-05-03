"use strict";
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    "Skill",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Skill.associate = function(models) {
    Skill.hasMany(models.StudentSkill),
    Skill.hasMany(models.VacancySkill),
    Skill.hasMany(models.CourseSkill)
  };
  return Skill;
};
