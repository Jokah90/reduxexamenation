const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })) // berättar för express att det ska använda urlencoded och json-moduler
app.use(express.json())



module.exports = app


