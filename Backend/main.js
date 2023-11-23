const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require(`mongoose`);

const server = express();
server.use(bodyparser.urlencoded({ extnded: true }));
server.use(bodyparser.json())


app.listen(5000, () => {
    console.log(`hey server is up`)
})
