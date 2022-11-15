const Validation = require("./Validation.js");

class Bonus{
  #bonus

  constructor(numbers, bonus){
    this.validate(numbers,bonus);
    this.#bonus = bonus;
  }

  getBonus(){
    return this.#bonus;
  }

  validate(numbers, bonus){
    Validation.isValidRangeNumber(bonus);
    Validation.isNotContained(numbers, bonus);
  }
}


module.exports = Bonus;
