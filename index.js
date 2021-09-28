/*jshint esversion: 6 */
var express = require("express");
var app = express();
const PORT = process.env.PORT || 4000;

app.get("/getUsers", (request, response) => {
    response.send("Hello World!!!");
});

app.get("/getEmployees", (request, response) => {
    var employees = [{id: 1234,
                     name: "Abid",
                     Company: "American Express"},
                     {id: 4321,
                      name: "Abmohamm",
                      Company: "AT&T"},
                      {id: 2341,
                       name: "MdAbid",
                       Company: "AIG"},
                      {id: 3241,
                       name: "AbidMd",
                       Company: "Fitch Ratings"},
                       {id: 1432,
                        name: "AbidMohd",
                        Company: "STMD"},
                        {id: 1243,
                         name: "MohdAbid",
                         Company: "Xerox"},
                         {id: 3421,
                          name: "AbidMd",
                          Company: "Case-Net"}];
    console.log("<============= Response Object : " + JSON.stringify(employees) + " =============>");
    response.json(employees);
});

// Node -> http.createServer
app.listen(PORT, () => {
    console.log('<============ PORT : ' + PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
});