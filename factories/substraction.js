const Operations = require('./operations');
 
class Sum extends Operations{
    getValue() {
        return this.valueOne - this.valueTwo;
    }
}
 
module.exports = Sum;