"use strict";
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      companyID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      link: DataTypes.STRING
    },
    {}
  );
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};
