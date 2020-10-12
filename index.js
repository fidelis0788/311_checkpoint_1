const express = require('express');
const app = express();
const controller = require('./controllers/users');
const bodyParser = require("body-parser")

app.get('/', (req, res) => res.send('default route'))
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is listening on:', port)
})

