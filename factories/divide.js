const Operations = require('./operations');
 
class Divide extends Operations{
    getValue() {
        return this.valueOne / this.valueTwo;
    }
}
 
module.exports = Divide;