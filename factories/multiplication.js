const Operations = require('./operations');
 
class Multiplication extends Operations{
    getValue() {
        return this.valueOne * this.valueTwo
    }
}
 
module.exports = Multiplication;