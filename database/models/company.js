"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      name: DataTypes.STRING,
      city: DataTypes.INTEGER,
      link: DataTypes.STRING
    },
    {}
  );
  Company.associate = function(models) {
    Company.belongsTo(models.User),
    Company.hasOne(models.City)
  };
  return Company;
};
