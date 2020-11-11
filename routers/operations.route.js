const express = require("express");
const { body } = require("express-validator");
const usersController = require("../controllers/operations.controller");
const router = express.Router();
const valuesNumerics = [
  body("valueOne")
    .exists()
    .withMessage("Value one is required")
    .matches(/^[0-9.-]+$/, "i")
    .withMessage("The value one must be only numeric")
    .trim()
    .escape(),
  body("valueTwo")
    .exists()
    .withMessage("Value two is required")
    .matches(/^[0-9.-]+$/, "i")
    .withMessage("The value two must be only numeric")
    .trim()
    .escape()
];


router.post(
  '/sum',
  valuesNumerics,
  usersController.sum
);

router.post(
  '/subtraction',
  valuesNumerics,
  usersController.subtraction
);

router.post(
  '/multiplication',
  valuesNumerics,
  usersController.multiplication
);

router.post(
  '/divide',
  [
    body("valueOne")
      .exists()
      .withMessage("Value one is required")
      .matches(/^[1-9]+([.][0-9]+)?$/, "i")
      .withMessage("The value one must be only numeric y mayor a 0")
      .trim()
      .escape(),
    body("valueTwo")
      .exists()
      .withMessage("Value two is required")
      .matches(/^[0-9.-]+$/, "i")
      .withMessage("The value two must be only numeric")
      .trim()
      .escape()
  ],
  usersController.divide
); 

module.exports = router;