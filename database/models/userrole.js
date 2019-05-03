"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    "UserRole",
    {
      userID: DataTypes.INTEGER,
      roleID: DataTypes.INTEGER
    },
    {}
  );
  UserRole.associate = function(models) {
    UserRole.belongsTo(models.User),
    UserRole.belongsTo(models.Role)
  };
  return UserRole;
};
