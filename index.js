var express = require ('express'),
morgan = require('morgan'),
nodemailer = require('nodemailer'),
pug = require ('pug');
//bodyParser = require('body-parser');
var app = express();
// nycdaamswdi@gmail.com // nycdarocks
var transporter = nodemailer.createTransport('smtps://'+ process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS +':'+ process.env.EMAIL_PASSWORD + '@smtp.gmail.com');


app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', function(req, res){
   console.log('requesting homepage');
   res.sendFile(__dirname + '/index.html');
});

app.post('/send-email' , function(req, res){
   console.log('post request to homepage');
   console.log(req.body);
   var mailOptions = {
    from: process.env.PERSONAL_WEBSITE_EMAIL_ADDRESS, // sender address
    to: 'ghanbarifam@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
   };
   transporter.sendMail(mailOptions, function(error, info){
       if(error){
           return console.log(error);
       }
       console.log('Message sent: ' + info.response);
   });

   res.redirect('/');
});



app.listen(3000, function(){
      console.log('web server on port 3000');

});
