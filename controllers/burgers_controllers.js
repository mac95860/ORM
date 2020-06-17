const burger = require("../models/burger");
var express = require("express");
var router = express.Router();

//create routes that render data to handlebars

//get all burgers
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var obj = {
            burgers: data
        };
        res.render("index", obj);
    });
});

//add a burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [ 
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId })
    });
});

//update burger to devoured
router.put("/api/burgers/:id", function (req, res) {7
    var condition = {id: parseInt(req.params.id)};
    console.log("condition" , condition);
    console.log(req.body)

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        res.status(200).end();
    });
});

//export routes
module.exports = router;



