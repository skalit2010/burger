// dependencies
var mysql = require("mysql");
var connection;

// uses JawsDB to configure connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "fx5yv51opy52j75u",
		password: "jhb14o62nv6lvg7d",
		database: "zpsq8xfxf66u8uv3"
	});
}

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;