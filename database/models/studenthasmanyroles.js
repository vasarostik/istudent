"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentHasManyRoles = sequelize.define(
    "StudentHasManyRoles",
    {
      projectID: DataTypes.INTEGER,
      roleID: DataTypes.INTEGER
    },
    {}
  );
  StudentHasManyRoles.associate = function(models) {
    // associations can be defined here
  };
  return StudentHasManyRoles;
};
