var express     = require('express');
var app         = express();
var mongojs 	= require('mongojs');
var db 			= mongojs('debate-now', ['topicslist']);
var port        = process.env.PORT || 3000;
var bodyParser 	= require('body-parser');

 

//Declare static directory
app.use(express.static(__dirname + "/public"));
app.use("/app",express.static(__dirname + "/app"));
app.use(bodyParser.json());

app.get('/topicslist', function(req,res){
	console.log("I recieved GET request");
	db.topicslist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/topicslist', function(req,res){
	console.log(req.body);
	db.topicslist.insert(req.body, function(err, doc){
		res.json(doc);
	});

});

// Start the server
app.listen(port);
console.log('Running on: http://localhost:' + port);
