const { response } = require('express');
const { MONGOURI } = require('./MONGOURI.js');

const mongoose = require('mongoose');
const express = require('express');

const port = Number(process.env.PORT || 8000);
const app = express();

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Database successfully connected");
});

mongoose.connection.on("error", (error) => {
    console.log(error);
});

const testMiddleware = (req, response, next) => {
    console.log("middleware Executed!");
    next();
}

app.get("/", (req, res) => {
    res.send("ContactList Api!")
})

app.get("api/allContacts", testMiddleware, (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server running on port: ${[port]}`)
})

