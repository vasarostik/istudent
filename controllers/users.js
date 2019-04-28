const User = require("../database/models").User;
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const config = require("../config/app");

module.exports = {
  signUp: (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (!user) {
        User.create({
          email: req.body.email,
          password: req.body.password
        }).then(newUser => {
          console.log(newUser.dataValues);
          res.status(201).send("User created successfully");
        });
      } else {
        res.status(409).send("This user already exists");
      }
    });
  },

  logIn: (req, res) => {
    User.findOne({
      where: { email: req.body.email }
    }).then(user => {
      if (!user || !user.validPassword(req.body.password)) {
        res.status(403).send("Incorrect login or password");
      } else {
        const refreshToken = uuid();
        res.status(201).send({
          accessToken: jwt.sign({ userId: user.id }, config.secretKey, { expiresIn: '2h' }),
          refreshToken: refreshToken
        });
      }
    });
  },

  googleOAuth: (req, res) => {
    const refreshToken = uuid();
    res.send({
      accessToken: jwt.sign({ userId: req.user.id }, config.secretKey),
      refreshToken: refreshToken
    });
  }
};
