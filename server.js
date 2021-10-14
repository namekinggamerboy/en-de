const express = require('express');
const morgan = require("morgan");
const  bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

app.use(morgan("dev")).use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.set("trust proxy", 5);

  app.use(session({ secret: "OP ENCODE & DECODE", resave: false, saveUninitialized: false })); 
  
app.locals.domain = "encode-decod.herokuapp.com";
app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

app.use(express.static('public'));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
		});

app.get('/', function (req, res) {
  res.render(__dirname+ "/index.ejs",{ res, req });
});
 app.post('/en', async (req, res) => {
  console.log(req.body);
   if(req.body && req.body.uri){
     return res.json({ success: true, output: Buffer.from(req.body.uri).toString('base64') });
   } else {    
  return res.json({ success: false });
   }
 });

 app.post('/de', async (req, res) => {
   if(req.body && req.body.uri){
     return res.json({ success: true, output: Buffer.from(req.body.uri, 'base64').toString('ascii')  });
   } else {    
  return res.json({ success: false });
   }
 });
app.listen(process.env.PORT);
