const express = require('express');
const app = express();
app.locals.domain = "encode-decod.herokuapp.com";
app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render(__dirname+ "/index.ejs",{ res, req });
});
 app.post('/en', async (req, res) => {
  
   if(req.body && req.body.uri){
     return res.json({ success: true, output: Buffer.from(req.body.uri).toString('base64') });
   } else {    
  return res.json({ success: false });
   }
 });

 app.post('/de', async (req, res) => {
   if(req.body && req.body.uri){
     return res.json({ success: true, output: Buffer.from(req.body.uri).toString('ascii')  });
   } else {    
  return res.json({ success: false });
   }
 });
app.listen(process.env.PORT);
