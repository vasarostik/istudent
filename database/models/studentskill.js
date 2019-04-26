"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentSkill = sequelize.define(
    "StudentSkill",
    {
      studentID: DataTypes.INTEGER,
      skillID: DataTypes.INTEGER
    },
    {}
  );
  StudentSkill.associate = function(models) {
    // associations can be defined here
  };
  return StudentSkill;
};
