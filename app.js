require('dotenv-defaults').config();

const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');

const configs = require("./config/app");
const Routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize({}));

// Passport configuration
require('./core/passport');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Створюємо маршрути
app.use("/reg", Routes.registration);
app.use("/auth", Routes.authorization);
app.use('/profile', passport.authenticate('bearer', { session: false }), Routes.profile);

app.get('/getToken', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.status(200).send('Valid token');
});

app.listen(configs.port, configs.host, () => {
    console.log(`app now listening for request on ${configs.host}:${configs.port}.`);
});