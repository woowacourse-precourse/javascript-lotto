const Validation = require("./Validation.js");
class Bonus {
  #Bonus;

  constructor(inputNumber) {
    Validation.validBonus(inputNumber);
    this.#Bonus = inputNumber;
  }

  getBonus() {
    return this.#Bonus;
  }
}

module.exports = Bonus;
