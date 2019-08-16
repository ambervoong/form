const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));



// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});


// Create a Transport instance using nodemailer
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ablackpharaoh@gmail.com',
           pass: '#testing#'
       }
   });



// transporter.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
//  });

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('handle',function(request,response){
//   var query1=request.body.var1;
//   var query2=request.body.var2;
//   });

app.post('/express_backend', function(req, res) {
  console.log("123");
  let body = JSON.stringify(req.body);
  console.log(body);
  console.log(Object.values(req.body));
  let content = JSON.stringify(Object.values(req.body));

  const mailOptions = {
    from: 'ablackpharaoh@gmail.com', // sender address
    to: 'ablackpharaoh@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    text: content
    //html: '<p>Testing</p>'// plain text body
  };


  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

});