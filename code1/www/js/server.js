var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList']); //(dbName, collection)
var bodyParser = require('body-parser');

app.use(express.static(__dirname = '/'));
app.use(bodyParser.json());

app.listen(3000);
console.log("server running on port 3000");

app.get('/contactList', function (req, res)
{
	db.contactList.find(function(err, docs)
	{
		console.log(docs);
		res.json(docs);
	});
});

app.post('/contactList', function(req, res)
{
	console.log(res.body);
	db.contactList.insert(req.body, function(err, doc)
	{
		res.json(doc);
	})
});

