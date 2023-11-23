const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const users = require('./routes/Users')

app.use('/', users);

app.use(function(req, res, next) {
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})