"use strict";
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      city: DataTypes.INTEGER
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
