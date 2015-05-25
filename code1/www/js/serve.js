var mongo = require('mongodb').MongoClient;
//var bson = require('bson');

//var db = mongoose.connection;

var uri = "mongodb://AdminScott:6tfc7ygv?@ds062797.mongolab.com:62797/dummy_info";

mongo.connect(uri, function(err, db)
{
  if(err)
  {
    console.log("Error: unable to connect to Database");
    return;
  }

  //your code here
});
/*var schema = mongoose.Schema(
{
  categories: String,
  deal: String,
  code: String
});

var Post = mongoose.model('posts', schema);
module.exports = Post;

Post.find({}).exec(function(err, posts)
{
  res.render('posts/index', {posts: posts});
});
mongoose.connect('mongodb://localhost/advertdb');

db.on('error', function(msg)
{
  console.log('Mongoose connectionerror %s', msg);
});

db.once('open', function()
{
  console.log('Mongoose conection made');
});*/
