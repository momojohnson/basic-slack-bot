
const serverless  = require('serverless-http');
const user = require('./slack_processing');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('Hello World');
});

app.post('/seawolf/choice', function(req, res){

  if(req.body.text.toLowerCase() == 'email'){
    user.getUserProfile(req.body.user_id).then((profile)=> {
      let data = {
        text: `>*${profile.user.profile.real_name}*, your email address *${profile.user.profile.email}* has been set as your notification option`

      }
        res.json(data);
    });
  }else{
    res.json({"message": "This option isn't a valid choice"});
  }

})

module.exports.handler = serverless(app);
