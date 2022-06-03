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

mongoose.connect(process.env.MONGO_URI+'/todoDB');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

app.use("/api/",todoRoute);

console.log(process.env.MONGO_URI+'/todoDB')

if (process.env.STAGE === 'local'){

  app.listen(7000, () => {
    console.log("APP listening to 7000")
  });

} else {

  exports.http = serverless(app);

}