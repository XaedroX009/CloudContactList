const {response} = require('express');
const MONGOURI = require('./helper.js');

const mongoose = require('mongoose');
const express = require('express');

const port = Number(process.env.PORT || 8000);
const app = express();

