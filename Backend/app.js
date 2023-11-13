const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
    res.json({ res: 'node responded' })
})

app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`)
})