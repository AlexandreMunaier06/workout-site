//server/app.ts
const express = require('express');
const peoploRoutes = require('./routes/auth');

const app = express();

app.use(express.json())
app.use('/cadastro', peoploRoutes);

module.exports = app;
