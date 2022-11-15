const Validation = require("./Validation.js");
class Winning {
  #Winning;

  constructor(inputNumber) {
    Validation.validWinning(inputNumber);
    this.#Winning = inputNumber;
  }

  getWinning() {
    return this.#Winning;
  }
}

module.exports = Winning;
