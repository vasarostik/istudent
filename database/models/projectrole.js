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
    ProjectRole.hasMany(models.StudentHasManyRoles)
  };
  return ProjectRole;
};
