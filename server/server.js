const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const accountRoutes = require("./routes/account");
const scoreRoutes = require("./routes/score");
// var socketServer = 

// app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// init react route

// init api route
app.use("/api", accountRoutes);
app.use("/api", scoreRoutes);

// error handling middleware
// send error message and change the status
app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message})
});

// init socket

server.listen(process.env.port || 3001, function() {
  console.log("listening 3001");
});
