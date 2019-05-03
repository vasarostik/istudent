"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudentTechnology = sequelize.define(
    "StudentTechnology",
    {
      studentID: DataTypes.INTEGER,
      technologyID: DataTypes.INTEGER
    },
    {}
  );
  StudentTechnology.associate = function(models) {
    StudentTechnology.belongsTo(models.Student),
    StudentTechnology.belongsTo(models.Technology)
  };
  return StudentTechnology;
};
