// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from '../../src/app/component/App';
// const React = require('react');
// const renderToString = require('react-dom/server');
// const App = require('../../src/app/component/App');

const express = require("express");
const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

router.get('/', function(req, res) {
	const appString = renderToString(`<App />`);
	res.render('index', {body: appString});
});

module.exports = router;