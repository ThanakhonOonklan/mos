var express = require('express');
var session = require('express-session'); 
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+ '/index.html'));
    });