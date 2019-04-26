"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProjectRole = sequelize.define(
    "ProjectRole",
    {
      name: DataTypes.STRING
    },
    {}
  );
  ProjectRole.associate = function(models) {
    // associations can be defined here
  };
  return ProjectRole;
};
