"use strict";
module.exports = (sequelize, DataTypes) => {
  const Institution = sequelize.define(
    "Institution",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Institution.associate = function(models) {
    Institution.belongsTo(models.Education)
  };
  return Institution;
};
