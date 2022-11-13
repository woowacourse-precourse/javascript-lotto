class BonusNumber{
    bonusnumber;
  
    constructor(bonusnumber, lotto) {
      this.validate(bonusnumber, lotto);
      this.bonusnumber = bonusnumber;
    }
  
    validate(numbers, lotto) {

    }
    
    getNumbers(){
      return this.bonusnumber;
    }
  }
  
  module.exports = BonusNumber;
  