// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  res.json({
  	ipaddress : req.ip,
  	language: req.headers["accept-language"], 
  	software: req.headers["user-agent"]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/*
http-headers
*{"ipaddress": {
	"host":"127.0.0.1:51210",
	"connection":"keep-alive",
	"sec-ch-ua":"\"Google Chrome\";v=\"95\",
	\"Chromium\";v=\"95\",
	\";Not A Brand\";v=\"99\"",
	"sec-ch-ua-mobile":"?0",
	"sec-ch-ua-platform":"\"Windows\"",
	"upgrade-insecure-requests":"1",
	"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
	"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
	"sec-fetch-site":"none",
	"sec-fetch-mode":"navigate",
	"sec-fetch-user":"?1",
	"sec-fetch-dest":"document",
	"accept-encoding":"gzip, deflate, br",
	"accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7
	"}
  }

*/
