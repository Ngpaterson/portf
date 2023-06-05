const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser"); 

const app = express();

const PORT = process.env.PORT || 5000;

//connect to mongo db and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then (() => {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err)) 