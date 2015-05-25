var restify = require('restify');
var mongojs = require('mongojs');
var morgan = require('morgan');
//var db = mongojs('advertdb', ['userCollection']);
var user = require('./user')(server, db);

var databaseUrl = "Admin:6tfc7ygv?@ds062797.mongolab.com:62797/dummy_info";
var collections = ("dUser");
var db = require('mongojs').connect(databaseUrl, collections);

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('./'));

server.use(function(req, res, next)
{
	res.header('Access-Control-Allow-Origin',"*");
	res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

db.userCollection.find(function(err, userCollection)
{
	if(err || !userCollection)
	{
		console.log("No business name was found");
	}else userCollection(function(err, docs)
	{
		console.log(err);
	});
});

/*server.listen(process.env.PORT || 9804, function()
{
	console.log("Sever started @ ", process.env.PORT || 9804);
});*/
