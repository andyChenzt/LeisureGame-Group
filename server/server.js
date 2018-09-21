const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const route = require("./routes/route");
const cors = require("cors");
const accountRoutes = require("./routes/account");
const scoreRoutes = require("./routes/score");
// var socketServer = 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors());


// init route
app.use("/api", accountRoutes);
app.use("/api", scoreRoutes);

app.use("/", (req, res) => {
	res.sendFile(path.join(__dirname + '../public/index.html'));
});
// error handling middleware
// send error message and change the status
app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message})
});

// init socket

server.listen(process.env.port || 3001, () => {
  console.log("listening 3001");
});

// for test
module.exports = server;