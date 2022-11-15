const {ERROR} = require("./Constants.js");

class Money{
    money;
  
    constructor(money) {
      this.validate(money);
      this.money = money;
      
    }
  
    validate(money) {
        if(isNaN(money))
            throw new Error("[ERROR] 숫자를 입력해 주세요.");
        if(money < 0)
            throw new Error("[ERROR] 양수를 입력해 주세요.");
        if(!(money % 1 === 0))
            throw new Error("[ERROR] 정수를 입력해 주세요.");    
    }

    getMoney(){
      return this.money;
    }
  }
  
  module.exports = Money;
  