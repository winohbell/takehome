const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4009;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})