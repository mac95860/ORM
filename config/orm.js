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
        var queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (?)`;
        connection.query(queryString, values, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function (table, devouredCol, condition, cb) {
        var queryString = `UPDATE ${table} SET ${devouredCol.toString()} WHERE ${condition}`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;