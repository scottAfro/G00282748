var restify = require('restify');
var mongojs = require('mongojs');

var db = mongojs('mongodb://AdminScott:6tfc7ygv?@ds62797.mongolab.com:62797/dummy_info', ['dUser'])

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(62797, function()
{
  console.log('Console started at 62797');
});

server.get("/dUser", function(req, res, next)
{
  db.dUser.find(function(err, dUser)
  {
    res.writeHead(200,
    {
      'Content-Type': 'application/json; cahrset=utf-8'
    });
    res.end(JSON.stringify(dUser));
  });
  return next();
});
//2nd attempt
/*var mongo = require('mongodb');

var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('ds062797.mongolab.com', 62797, {auto_reconnect : true});
var db = new Db('dummy_info', server);

db.open(function(err, client)
{
  console.log('server running');

  client.authenticate('AdminScott', '6tfc7ygv?', function(err,success)
  {
    if(err)
    {
      console.log('Can not do it', err);
    }
    else {
      console.log('can do it?');
    }
  });

  //find all
  var findDocuments = function(db, callback)
  {
    var collection = db.collection('dUser');

    collection.find({});
  }
});*/

//3rd try
/*var http = require('http');
var mongojs = require('mongojs');

var uri = 'mongodb://AdminScott:6tfc7ygv?@ds062797.mongolab.com:62797/dummy_info';
var db = mongojs.connect(uri, ['dUser']);

var server = http.createServer(requestHandler);

function requestHandler(request, response)
{
  response.writeHead(200, {'Content-Type': 'text/html'});
}

db.dUser.find({}), function (err, record)
{
  if(err)
  {
    console.log('There was an err');
    response.end();
    return;
  }
}

server.listen(8888);*/
