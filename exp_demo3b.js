var express = require('express');
var app = express();
var routerdemo = require('./exp_demo3a.js');

//both exp-demo3a.js and exp-demo3b.js are in same directory
app.use('/routerdemo', routerdemo)

app.listen(3000);


