var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var path = require('path');

/*
var logger = function(req,res,next){
console.log('loading..')
next();
};

app.use(logger);

*/
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static(path.join(__dirname,'public')));

var person =[
  {
  name:'Devanand',
  age:35
  },
  {
    Name:'Utkarsh',
    Age:7
  },
  {
    name: 'Annu',
    age:30
  }
]

app.get('/', function (req, res) {
  //res.send('Hello Node World!')
  res.json(person);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})