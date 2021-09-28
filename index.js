/*jshint esversion: 6 */
var express = require("express");
var app = express();
const PORT = process.env.PORT || 4000;


app.get("/getUsers", (request, response) => {
    response.send("Hello World!!!");
});

app.listen(PORT, () => {
    console.log('<============ PORT : ' + PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
});