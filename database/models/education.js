"use strict";
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      studentID: DataTypes.INTEGER,
      institution: DataTypes.INTEGER,
      isFinished: DataTypes.BOOLEAN,
      specialization: DataTypes.STRING
    },
    {}
  );
  Education.associate = function(models) {
    // associations can be defined here
  };
  return Education;
};
