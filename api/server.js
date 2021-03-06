require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const statsRoutes = require('./routes/stats');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.use('/api', statsRoutes);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});