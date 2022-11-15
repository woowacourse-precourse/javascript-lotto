const { ERROR_MESSAGE } = require("./Constant");

class WinningNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(winningArr) {
    this.validate(winningArr);
    this.sortData(winningArr);
    this.#winningNumbers = winningArr;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }
  get bonusNumber() {
    return this.#bonusNumber;
  }
  set bonusNumber(bonusNumber) {
    this.validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  validate(winningArr) {
    var isOverlap = new Set(winningArr).size != winningArr.length;   
    if(winningArr.length !== 6 || isOverlap) {
      throw new Error(ERROR_MESSAGE.WINNING_WRONG_INPUT);
    }
  }

  validateBonusNumber(bonusNumber) {
    var bonus = Number(bonusNumber);
    if(isNaN(bonus) || (bonus < 0 || bonus > 45)) {
      throw new Error(ERROR_MESSAGE.BONUS_WRONG_INPUT);
    } 
  }

  sortData(winningArr) {
    winningArr.sort(function(a, b) { 
      return a - b;
    });
   }
 
}

module.exports = WinningNumber;
