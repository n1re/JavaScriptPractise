'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
const STATIC_DIR = __dirname;

app.use(express.static(STATIC_DIR));

app.listen(PORT, () => console.log(PORT));
