const express = require('express');
const router = express.Router();


// import controllers
const {getTest} = require("../controllers/test");

//  middlewares

// api routes
router.get("/test", getTest);


module.exports = router;

