class Money{
    bonusnumber;
  
    constructor(money) {
      this.validate(money);
      this.money = money;
    }
  
    validate(money) {

    }
    
    getNumbers(){
      return this.money;
    }
  }
  
  module.exports = Money;
  