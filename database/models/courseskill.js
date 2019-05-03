"use strict";
module.exports = (sequelize, DataTypes) => {
  const CourseSkill = sequelize.define(
    "CourseSkill",
    {
      courseID: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER
    },
    {}
  );
  CourseSkill.associate = function(models) {
    CourseSkill.belongsTo(models.Skill),
    CourseSkill.belongsTo(models.Course)
  };
  return CourseSkill;
};
