var express = require('express')
var app = express()

var logger = function(req,res,next){
console.log('loading..')
next();
};

app.use(logger);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})