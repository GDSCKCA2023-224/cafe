const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require(`mongoose`);

//importation of routes
const loginRoute = require(`./routes/userLogin`);
const userRoute = require(`./routes/Users`)


const server = express();
server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());
server.use(loginRoute);
server.use(userRoute);


module.exports = server;