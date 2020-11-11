const Sum = require('./sum');
const Subtraction = require('./substraction');
const Multiplication = require('./multiplication');
const Divide = require('./divide');

const operationType = { Sum, Subtraction, Multiplication, Divide };

module.exports = {
  assignOperation: (type, attributes) => {
    
    var Operation = operationType[type];
    console.log(Operation)
    return new Operation(type, attributes).getValue();
  },
};