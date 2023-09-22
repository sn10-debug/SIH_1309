const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const getResponse = require("./controllers/connectDialogFlow");

app.post("/dialogflow", getResponse);

module.exports = app;
