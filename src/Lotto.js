const { ERROR_MESSAGE } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.money = 0;
    this.arrayLotto = [];
    this.arrayWinLotto = 0;
    this.numberBonus = 0;
    this.result = {};
    
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoNumError);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.overlapNumError);
    }

    numbers.map((number) => {
      if (!(Number(number) >= 1 && Number(number) <= 45)) throw new Error(ERROR_MESSAGE.overlapBonusNumError);
      this.filterNumber(number);
    });
  }
  filterNumber(number) {
    if (!(/^[0-9]{1,2}$/.test(number))) throw new Error(ERROR_MESSAGE.inputError);
  }
}

module.exports = Lotto;
