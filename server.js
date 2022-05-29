//Adding modules
const express = require("express");
const app = express();

//Serving up html file
app.get("/", (req, res) => {
  res.sendFile("/Users/aidanwilliams/repos/100Devs/node-assignment/index.html");
});

//Sever is listening to localhost port 3000
app.listen(3000, function () {
  console.log("listening on 3000");
});
