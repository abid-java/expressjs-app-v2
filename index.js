/*jshint esversion: 6 */
var express = require("express");
var employees = require('./routes/employees');
var products = require('./routes/products');
var app = express();

const PORT = process.env.PORT || 4000;

app.use('/employees', employees);

app.use('/products', products);

// Node -> http.createServer
app.listen(PORT, () => {
    console.log('<============ PORT : ' + PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
});