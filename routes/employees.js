/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();

router.get('/', (request, response) => {
    console.log("Request Object : ", request);
    var employees = [{
        id: 1234,
        name: "Abid",
        Company: "American Express"
    },
    {
        id: 4321,
        name: "Abmohamm",
        Company: "AT&T"
    },
    {
        id: 2341,
        name: "MdAbid",
        Company: "AIG"
    },
    {
        id: 3241,
        name: "AbidMd",
        Company: "Fitch Ratings"
    },
    {
        id: 1432,
        name: "AbidMohd",
        Company: "STMD"
    },
    {
        id: 1243,
        name: "MohdAbid",
        Company: "Xerox"
    },
    {
        id: 3421,
        name: "AbidMd",
        Company: "Case-Net"
    }];
    console.log("<============= Response Object : " + JSON.stringify(employees) + " =============>");
    response.json(employees);
});

router.get('/:employeeId', (request, response) => {
    console.log("Request Params : ", request.params.employeeId);
    var successResponse = {
        "id": request.params.employeeId,
        "status": 200,
        "description": "Employee Created Successfully",
    };
    response.json(successResponse);
});

/*router.get('/:city/:state', (request, response) => {
    console.log("Request Params : ", request.params.city + "=====" + request.params.state);
    var successResponse = {
        "status": 200,
        "description": "Employee Created Successfully",
    };
    response.json(successResponse);
}); */

router.get('/search/:empId([0-9]{4})', (request, response) => {
    console.log("Request Params : ", request.params.empId);
    var successResponse = {
        "id": request.params.empId,
        "status": 200,
        "description": "Employee Fetched Successfully",
    };
    response.json(successResponse);
});

module.exports = router;
