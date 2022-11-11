const Data = require('./utils/Data');

class LottoNumber {
  #data = {
    sixNumbers: 0,
    bonus: 0,
  };

  registerSixNumbers(sixNumbersString) {
    this.#data.sixNumbers = Data.makeUsableSixNumbers(sixNumbersString);
  }

  registerBonus(bonusString) {
    this.#data.bonus = Data.convertStringToNumber(bonusString);
  }
}

module.exports = LottoNumber;
