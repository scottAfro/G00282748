var bcrypt = require('bcrypt');

module.exports.cryptPassword = function(password, callback)
{
	bycrpt.genSalt(10, function()
	{
		if(err)
		{
			return callback(err);
		}

		bcrypt.hash(password, salt, function()
		{
			return callback(err, hash);
		});
	});
};

module.exports.comparePassword = function (password, usrPassword, callback)
{
	bcrypt.commpare(password, usrPassword, function(err, passMatch)
	{
		if(err)
		{
			return callback(err);
		}
		return callback(null, passMatch);
	});
};
