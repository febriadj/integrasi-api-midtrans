const express = require('express');
const MidtransClient = require('midtrans-client');
const routes = require('./routes/index');

require('dotenv').config();
require('./ngrok')();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Inisialisasi Midtrans Client Snap
const ApiClient = new MidtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
  clientKey: process.env.CLIENT_KEY,
});

// parsing ApiClient
app.use(routes(ApiClient));

app.listen(port);
console.log(`Server running on port ${port}`);
