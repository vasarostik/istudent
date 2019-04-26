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
    // associations can be defined here
  };
  return UserRole;
};
