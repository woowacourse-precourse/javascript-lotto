const {ERROR} = require("./Constants.js");

class BonusNumber{
    bonusnumber;
  
    constructor(bonusnumber, numbers) {
      this.validate(bonusnumber, numbers);
      bonusnumber = this.toNumber(bonusnumber);
      this.bonusnumber = bonusnumber;
    }
  
    validate(bonusnumber, numbers) {
        if(isNaN(bonusnumber))
            throw new Error(ERROR.NOT_NUMBER_ERROR);
        if(bonusnumber < 0)
            throw new Error(ERROR.NEGATIVE_ERROR);
        if(!(bonusnumber % 1 === 0))
            throw new Error(ERROR.NOT_INT_ERROR);
        if(bonusnumber<1 || bonusnumber>45)
            throw new Error(ERROR.LOTTO_DOMAIN_ERROR); 
        if(numbers.includes(bonusnumber))
            throw new Error(ERROR.BONUS_DOMAIN_ERROR);
    }

    toNumber(number){
        number = Number(number);
        return number;
    }
    
    getNumber(){
      return this.bonusnumber;
    }
  }
  
  module.exports = BonusNumber;
  