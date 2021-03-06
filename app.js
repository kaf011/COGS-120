/**
 * Module dependencies.
 */
var userName = 'default';
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var bodyParser = require('body-parser')

var index = require('./routes/index');
var home = require('./routes/home');
var profile = require('./routes/profile');
var profile_records = require('./routes/profile_records');
var signup = require('./routes/signup');
var step1 = require('./routes/step1');
var step2 = require('./routes/step2');
var step3 = require('./routes/step3');
var forget_your_password = require('./routes/forget_your_password');
var finish = require('./routes/finish');
//var add = require('./routes/add');

var user_data = require("./users.json");
//var step2_data = require("./step2.json");
//var rateData = require("./rate.json");

// var signup_step2 = require("./signup_step2");

//var project = require('./routes/project');

// Example route
// var user = require('./routes/user');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/profile', profile.view);
app.get('/profile_records', profile_records.view);
app.get('/step1', step1.view);
app.get('/step2', step2.view);
app.get('/step3', step3.view);
app.get('/step3B', step3.viewB);
app.get('/signup', signup.view);
app.get('/forget_your_password', forget_your_password.view);
app.get('/finish', finish.view);

app.post('/login_success', (req, res) => {
  userName = req.body["name"];

  console.log(userName);
})

app.post('/signup_step1', (req, res) => {
  // let { formData } = req.form;
  let {
    username,
    pass,
    cpass,
    email
  } = req.body
  let obj = {
    'username': username,
    'pass': pass,
    'cpass': cpass,
    'email': email,
  }

  user_data.users[username] = obj
  console.log(user_data)
  res.send(user_data)
});


app.post('/signup_step2', (req, res) => {
  // let { formData } = req.form;
  let {
    imageId,
    eatBuddy,
    name
  } = req.body

  let userInfo = user_data.users;

  let obj = {
    'imageId': imageId,
    'eatBuddy': eatBuddy
  }

  //step2_data.step2[name] = obj; // indexed by username

  user_data.users[name]['imageId'] = imageId;
  user_data.users[name]['eatBuddy'] = eatBuddy;
  user_data.users[name]['records'] = [];

  //console.log(step1_data)


  // step1_data.step1[username] = obj
  // console.log(step1_data)
  res.send(user_data.users)
});

app.post('/rate', (req, res) => {
  console.log("success")
  let {
    newDate,
    newTime,
    duration,
    healthrate
  } = req.body
  let obj = {
    'Date': newDate,
    'Time': newTime,
    'Duration': duration,
    'Health': healthrate
  }
  console.log(obj);
  user_data.users[userName].records.reverse();
  user_data.users[userName].records.push(obj);
  user_data.users[userName].records.reverse();
  console.log(user_data.users[userName].records);
  res.send(user_data.users[userName].records);

});

app.get('/login', (req, res) => {
  const userPool = user_data.users;
  //console.log(userPool);
  res.send(userPool);
});

app.get('/user', (req, res) => {
  console.log(userName);
  // const puppies = step2_data.step2;
  // const keys = Object.keys(puppies)
  // const puppy = step2_data.step2[keys[keys.length - 1]];
  const puppy = user_data.users[userName];
  //console.log(puppy);
  res.send(puppy);

});

//app.get('/add', add.addRecord);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});