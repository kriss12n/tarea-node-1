const express = require("express");
const moment = require("moment");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express(); // es la funcion de mas alto nivel


const db = async() => {

    try {

        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("DB conected")
    } catch (err) {
        console.log(err)
    }
}

//ejecutar la base de datos

db();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("mongo esta iniciado");
});