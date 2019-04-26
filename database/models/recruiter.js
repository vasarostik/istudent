"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recruiter = sequelize.define(
    "Recruiter",
    {
      companyID: DataTypes.INTEGER
    },
    {}
  );
  Recruiter.associate = function(models) {
    // associations can be defined here
  };
  return Recruiter;
};
