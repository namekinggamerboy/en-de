const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+ "/index.html");
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
