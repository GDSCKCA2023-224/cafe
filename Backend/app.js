const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({yay: 'node responded'})
})

app.listen(3000, function () {
    console.log('server listening on port 3000')
})
