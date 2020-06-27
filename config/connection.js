const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "d9c88q3e09w6fdb2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "z4ud5d7mkfh1buyj",
  password: "evhkvmp0j4kq7azl",
  database: "dqoma5tz6o5b14i8"
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection to be used in orm.js.
module.exports = connection;
