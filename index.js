const express = require("express");
const bodyParse = require("body-parser");
const operationRoute = require("./routes/operations.route");
const index = express();


index.use(bodyParse.json());
index.use(bodyParse.urlencoded({ extended: true }));

// RUTAS
index.use('/operations',operationRoute);

index.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data });
});


module.exports = index;