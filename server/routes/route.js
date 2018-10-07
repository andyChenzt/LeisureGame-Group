const express = require("express");
const router = express.Router();
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;