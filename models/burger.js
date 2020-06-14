var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll  ( "burgers", function(res) { 
            cb(res);
        });
    },

    insertOne: function(cols, values, cb) {
        orm.insertOne("burgers", cols, values, function(res) {
            cb(res);
        });
    },

    updateOne: function (devouredCol, condition, cb) {
        orm.updateOne("burgers", devouredCol, condition, function(res) {
            cb(res);
        }); 
    }
}; //CRUD

module.exports = burger;