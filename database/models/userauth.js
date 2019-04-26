'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAuth = sequelize.define('UserAuth', {
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING
  }, {});
  UserAuth.associate = function(models) {
    // associations can be defined here
  };
  return UserAuth;
};