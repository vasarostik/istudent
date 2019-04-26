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
    // associations can be defined here
  };
  return CourseSkill;
};
