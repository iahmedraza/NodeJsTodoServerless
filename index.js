require("dotenv").config()

const express = require('serverless-express/express');
const todoRoute = require('./Routes/todoRoutes')
const mongoose = require('mongoose');
const serverless = require('serverless-express/handler');

const app = express();
app.use(express.json())
app.get('/', (req, res)=> {
    res.send('hello')
});
mongoose.connect('mongodb+srv://ahmedraza:fEGJOwzVeldycgzS@cluster0.i30ko.mongodb.net/todoDB?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use("/api/",todoRoute);


// app.listen(7000, () => {
//     console.log("APP listening to 7000")
// });

exports.http = serverless(app);