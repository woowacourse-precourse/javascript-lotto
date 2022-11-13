const { ERROR_MESSAGE } = require('./constants/message');
const { LOTTO_PRICE } = require('./constants/price');

class Validator {
  static checkNumber(number) {
    if (isNaN(number)) throw new Error(ERROR_MESSAGE.number);
    if (Number.isInteger(number) === false) throw new Error(ERROR_MESSAGE.integer);
  }

  static checkLottoNumber(number) {
    this.checkNumber(number);
    if (number < 1 || number > 45) throw new Error(ERROR_MESSAGE.lottoRange);
  }

  static checkLottoNumbers(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.lottoSize);
    const set = new Set(numbers);
    if (set.size !== 6) throw new Error(ERROR_MESSAGE.unique);

    numbers.forEach((number) => {
      this.checkLottoNumber(number);
    });
  }

  static checkBonusNumber(bonusNumber, winNumbers) {
    this.checkLottoNumber(bonusNumber);
    if (winNumbers.includes(bonusNumber)) throw new Error(ERROR_MESSAGE.unique);
  }

  static checkPay(pay) {
    this.checkNumber(pay);
    if (pay < LOTTO_PRICE) throw new Error(ERROR_MESSAGE.payRange);
    if (pay % LOTTO_PRICE !== 0) throw new Error(ERROR_MESSAGE.payDivide);
  }
}

module.exports = Validator;
