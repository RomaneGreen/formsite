const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;


app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/special', function (req, res) {
    res.send("Xell boy")
  })


  