/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();

router.get('/', (request, response) => {
    // console.log("<============= Request Object : " + JSON.stringify(request) + " =============>");
    var products = [{
        id: 7890,
        name: "Phone",
        Company: "Apple"
    },
    {
        id: 0987,
        name: "Tablet",
        Company: "Samsung"
    },
    {
        id: 8970,
        name: "Ipod",
        Company: "Windows"
    },
    {
        id: 7980,
        name: "Laptop",
        Company: "DELL"
    },
    {
        id: 0897,
        name: "Mouse",
        Company: "Logitech"
    },
    {
        id: 8790,
        name: "Laptop-Charger",
        Company: "DELL"
    },
    {
        id: 0978,
        name: "Head-Set",
        Company: "Sony"
    }];
    console.log("<============= Response Object : " + JSON.stringify(products) + " =============>");
    response.json(products);
});

router.get('/:productId', (request, response) => {
    console.log("Request Params : ", request.params.productId);
    var successResponse = {
        "id": request.params.productId,
        "status": 200,
        "description": "Product Created Successfully",
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
});*/

router.get('/search/:prodId([0-9]{4})', (request, response) => {
    console.log("Request Params : ", rerquest.params.prodId);
    var successResponse = {
        "id": request.params.prodId,
        "status": 200,
        "description": "Product fetched Successfully",
    };
    response.json(successResponse);
});

router.get('/search-productname/:prodName([a-zA-Z])', (request, response) => {
    console.log("Request Params : ", request.params.prodName);
    var successResponse = {
        "id": request.params.prodName,
        "status": 200,
        "description": "Employee Fetched Successfully",
    };
    response.json(successResponse);
});

module.exports = router;
