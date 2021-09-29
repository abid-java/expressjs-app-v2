/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();

router.get('/', (request,response) => {
    // console.log("<============= Request Object : " + JSON.stringify(request) + " =============>");
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

module.exports = router;
