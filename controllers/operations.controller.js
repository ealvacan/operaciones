const { validationResult } = require('express-validator');
const factory = require('../factories/factory');

exports.sum = (req, res, next) => {
  funtionsOperations(req, res, 'Sum');
};

exports.subtraction = (req, res, next) => {
  funtionsOperations(req, res, 'Subtraction');
};

exports.multiplication = (req, res, next) => {
  funtionsOperations(req, res, 'Multiplication');
};

exports.divide = (req, res, next) => {
  funtionsOperations(req, res, 'Divide');
};

const funtionsOperations = (req, res, operationType) => {
  const errors = validationResult(req);
  validateErrors(errors);

  try {
    const result = operationResult(req, operationType);
    console.log(result)
    res.status(201).json({ message: operationType+" success.", data: { result } });
  } catch (e) {
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

const operationResult = (req, operationType) => {
  
  const valueOne = +req.body.valueOne;
  const valueTwo = +req.body.valueTwo;
  const result = factory.assignOperation(operationType, {
    valueOne,
    valueTwo,
  });
  console.log(result)
  return result;
};

function validateErrors(errors){
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
}