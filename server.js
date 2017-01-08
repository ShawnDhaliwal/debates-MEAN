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
		res.json(docs);
	});
});

app.post('/topicslist', function(req,res){
	db.topicslist.insert(req.body, function(err, doc){
		res.json(doc);
	});

});

app.get('/topicslist/agree/:id', function(req,res){
	var id = req.params.id;
	console.log("I recieved agree GET request");
	db.topicslist.findOne({_id: mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});

app.put('/topicslist/agree/:id', function(req,res){
	var id = req.params.id;
	var title = req.body.title;
	var newScore = req.body.score + 1;
	var newAgree = req.body.agree + 1;
	db.topicslist.findAndModify({query: {_id: mongojs.ObjectId(id)}, update: {$set: {agree: newAgree, score: newScore}},
		new: true}, function(err,doc){ 
			res.json(doc);

		});
	
});


app.get('/topicslist/disagree/:id', function(req,res){
	var id = req.params.id;
	console.log("I recieved disagree GET request");
	db.topicslist.findOne({_id: mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});

app.put('/topicslist/disagree/:id', function(req,res){
	var id = req.params.id;
	var title = req.body.title;
	var newScore = req.body.score - 1;
	var newDisagree = req.body.disagree + 1;
	db.topicslist.findAndModify({query: {_id: mongojs.ObjectId(id)}, update: {$set: {disagree: newDisagree, score: newScore}},
		new: true}, function(err,doc){ 
			res.json(doc);

		});
	
});


// Start the server
app.listen(port);
console.log('Running on: http://localhost:' + port);
