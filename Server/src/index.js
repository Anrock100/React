// import express from "express";
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
import { Router } from "./router/router.js";
import { config } from "dotenv";
config();
const port = 4000;
const login = require('./login.js')
const register = require('./register.js')
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(login);
app.use(register);
// parse application/json
app.use(bodyParser.json());
//db connection
// import database from './database/mydb.js';
// console.log(router);
app.use("/", Router);

app.listen(port, console.log("Port Running on http://localhost:" + port));

// // import { router } from "./router/router.js";

// const express = require("express");
// const app = express();

// // const register = require("./register");
// const login = require("./login");
// // const nodemailer = require('./routes/nodemailer')
// // const verification = require('./routes/code')

// const cors = require("cors");
// const connect = require("./connectdb");
// // const router = require("./register");

// require("dotenv").config();

// app.use(express.json());
// app.use(cors());

// app.use(register);
// // app.use("/", router);
// // app.use(nodemailer);
// // app.use(verification);

// connect();

// app.listen(4000, () => {
//   console.log(`Example app listening on port 4000`);
// });
