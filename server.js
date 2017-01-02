var express = require('express');
var app = express();
var path = require('path');

//Declare static directory
app.use("/public",express.static(__dirname + "/public"));

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);
console.log('node server running');
