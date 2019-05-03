const Student = require("../database/models").Student;
const userService = require("./user");

exports.find = studentId => {
  const student = Student.findOne({ where: { id: studentId } });
  return student;
};

exports.create = (userId, data) => {
  const student = Student.create({
      id: userId,
      firstName: data.firstName,
      lastName: data.lastName
  })
  return student;
};

/*
exports.create = (userId, data) => {
  const student = userService.findById( userId ).then(user => {
    user.createStudent({
        firstName: data.firstName,
        lastName: data.lastName,
        city: 
    });
  });
  return student;
};*/
