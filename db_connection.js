var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "RBGCod123!",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("USE pets; SELECT * FROM cats WHERE owner = 'Lennon';", function (err, result, fields) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});