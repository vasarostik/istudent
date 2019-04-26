"use strict";
module.exports = (sequelize, DataTypes) => {
  const WorkExperience = sequelize.define(
    "WorkExperience",
    {
      studentID: DataTypes.INTEGER,
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      workFrom: DataTypes.DATE,
      workUntil: DataTypes.DATE,
      isWorking: DataTypes.BOOLEAN,
      projectID: DataTypes.INTEGER
    },
    {}
  );
  WorkExperience.associate = function(models) {
    // associations can be defined here
  };
  return WorkExperience;
};
