// Create web server

var express = require('express');
var app = express();
var fs = require("fs");

// Get comment
app.get('/getComment', function (req, res) {
    // Get data from file
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

// Add comment
app.get('/addComment', function (req, res) {
    // First read existing comment
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["comment" + 3] = req.query.comment;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

// Delete comment
app.get('/deleteComment', function (req, res) {
    // First read existing comment
    fs.readFile(__dirname + "/" + "comment.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["comment" + 2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

// Run: node comment.js
// Open browser and type http://