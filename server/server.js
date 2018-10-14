const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const server = require("http").Server(app);
const route = require("./routes/route");
const cors = require("cors");
const accountRoutes = require("./routes/account");
const scoreRoutes = require("./routes/score");
const {drawingSocketServer} = require("./socket/drawingSocketServer");
const {snakeSocketServer} = require("./socket/snakeSocketServer");
const {socketServer} = require("./socket/index.js");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const staticAssetsPath = path.join(__dirname, '/../public');
app.use(express.static(staticAssetsPath));

app.use(cors({
  origin: 'http://localhost:3000'
}));

// init route
app.use("/api", accountRoutes);
app.use("/api", scoreRoutes);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


// send error message and change the status
app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message})
});

// init socket server
const myServer = server.listen(process.env.port || 3001, () => {
  console.log("listening 3001");
});

// socketServer(myServer);
drawingSocketServer(myServer); 
// snakeSocketServer(myServer);
// for socket 
module.exports = server;


