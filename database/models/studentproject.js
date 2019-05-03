"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentProject = sequelize.define(
    "StudentProject",
    {
      studentID: DataTypes.INTEGER,
      projectID: DataTypes.INTEGER
    },
    {}
  );
  StudentProject.associate = function(models) {
    StudentProject.belongsTo(models.Student),
    StudentProject.belongsTo(models.Project),
    StudentProject.hasMany(models.StudentHasManyRoles)
  };
  return StudentProject;
};
