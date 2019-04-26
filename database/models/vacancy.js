"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vacancy = sequelize.define(
    "Vacancy",
    {
      companyID: DataTypes.INTEGER,
      positionID: DataTypes.INTEGER,
      salaryFrom: DataTypes.INTEGER,
      salaryTo: DataTypes.INTEGER,
      detail: DataTypes.TEXT
    },
    {}
  );
  Vacancy.associate = function(models) {
    // associations can be defined here
  };
  return Vacancy;
};
