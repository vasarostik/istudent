"use strict";
module.exports = (sequelize, DataTypes) => {
  const CoursePartner = sequelize.define(
    "CoursePartner",
    {
      courseID: DataTypes.INTEGER,
      companyID: DataTypes.INTEGER
    },
    {}
  );
  CoursePartner.associate = function(models) {
    CoursePartner.belongsTo(models.Company),
    CoursePartner.belongsTo(models.Course)
  };
  return CoursePartner;
};
