const express = require('express');
const { message } = require('../controller/client');
const Router = express.Router();
Router.post("/message", message);
module.exports = Router;