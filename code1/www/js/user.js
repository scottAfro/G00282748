var pass = require('./password');

module.exports = function(server, db)
{
	db.userCollection.ensreIndex(
	{
		email: 1,
	},
	{
		unique: true
	})
	
	server.post('', function(req, res, next)
	{
		var usr = req.parms;
		pass.cryptPassword(usr.password, function(err, hash)
		{
			usr.password = hash;
			console.log("n", hash);
			db.userCollection.insert(usr, function(err, dbUser)
			{
				if(err)
				{
					if(err.code == 11000)
					res.writeHead(400,
					{
						'Content-Type': 'application/json; charset=utf-8'
					});
					res.end(JSON.stringify(
					{
						error: err,
						message: "A user with this email already exists"
					}));					
				}else{
					res.writeHead(200,
					{
						'Content-Type': 'application/json; charset=utf-8'						
					});
					dbUser.password = "";
					res.end(JSON.stringify(dbUser));
				}
			});
		});
		return next();
	});
	
	server.post('',function(req, res, next)
	{
		var usr = req.parms;
		if(uusr.email.trim().length == 0 || usr.password.trim().length == 0)
		{
			res.writeHead(403,
			{
				'Content-Type': 'application/json; charset=utf-8'
			});
			
			res.end(JSON.stringify(
			{
				error: "Invalid Credentials"
			}));
		}
		console.log("in");
		db.userCollection.findOne(
		{
			email: req.params.email
		},
		function(err, dbUser)
		{
			pass.compairPass(usr.password, dbUser.password, function(err, passMatch)
			{
				if(passMatch)
				{
					res.writeHead(200,
					{
						'Content-Type': 'application/json; charset=utf-8'
					});
					dbUser.password = "";
					res.end(JSON.stringify(dbUser));
				}else{
					res.writeHead(403,
					{
						'Content-Type': 'application/json; charset=utf-8'
					});
					
					res.end(JSON.stringify(
					{
						error: "Invalid User"
					}));
				}
			});
		});
		return next();
	});
};