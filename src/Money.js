const {ERROR} = require("./Constants.js");

class Money{
    money;
  
    constructor(money) {
      this.validate(money);
      this.money = money;      
    }
  
    validate(money) {
      if(isNaN(money))
        throw new Error(ERROR.NOT_NUMBER_ERROR);
      if(money < 0)
        throw new Error(ERROR.NEGATIVE_ERROR);
      if(!(money % 1 === 0))
        throw new Error(ERROR.NOT_INT_ERROR);    
    }

    getMoney(){
      return this.money;
    }
  }
  
  module.exports = Money;