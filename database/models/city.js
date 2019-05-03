"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      name: DataTypes.STRING
    },
    {}
  );
  City.associate = function(models) {
    City.belongsTo(models.Student),
    City.belongsTo(models.Company)
  };
  return City;
};
