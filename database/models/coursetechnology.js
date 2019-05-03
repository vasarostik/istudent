"use strict";
module.exports = (sequelize, DataTypes) => {
  const CourseTechnology = sequelize.define(
    "CourseTechnology",
    {
      courseID: DataTypes.INTEGER,
      technologyID: DataTypes.INTEGER
    },
    {}
  );
  CourseTechnology.associate = function(models) {
    CourseTechnology.belongsTo(models.Course),
    CourseTechnology.belongsTo(models.Technology)
  };
  return CourseTechnology;
};
