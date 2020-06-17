const connection = require("../config/connection");

//query via orm
const orm = {
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, col, values, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (" + `"${values[0]}"` + "," + values[1] + ");";
        console.log(queryString);
        connection.query(queryString,  function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (table, devouredCol, condition, cb) {
        var queryString = `UPDATE ${table} SET ? WHERE ?`;
        connection.query(queryString, [devouredCol, condition], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;