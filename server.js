const express = require('express');

require('dotenv').config();
require('./ngrok')();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port);
console.log(`Server running on port ${port}`);
