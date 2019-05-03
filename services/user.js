const User = require("../database/models").User;

exports.findById = id => {
  const user = User.findOne({ where: { id } });
  return user;
};

exports.findByEmail = email => {
  const user = User.findOne({ where: { email } });
  return user;
};

exports.getAllUsers = () => {
  const users = User.findAll();
  return users;
};

exports.create = data => {
  const newUser = User.create(data);
  return newUser;
};

exports.update = (data, id) => {
  const updatedUser = User.update(data, { where: { id } });
  return updatedUser;
};

exports.delete = id => {
  User.destroy({ where: { id } });
};
