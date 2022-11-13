class BonusNumber{
    bonusnumber;
  
    constructor(numbers, lotto) {
      this.validate(numbers, lotto);
      this.#numbers = numbers;
    }
  
    validate(numbers, lotto) {

    }
    
    getNumbers(){
      return this.bonusnumber;
    }
  }
  
  module.exports = Lotto;
  