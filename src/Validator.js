const { ERROR_MESSAGE } = require('./constants/message');
const {
  LOTTO_PRICE,
  LOTTO_SIZE,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
} = require('./constants/number');

class Validator {
  static checkInput(input) {
    input.split('').forEach((character) => {
      if ('0123456789,'.includes(character) === false) throw new Error(ERROR_MESSAGE.input);
    });
  }

  static checkNumber(number) {
    if (isNaN(number)) throw new Error(ERROR_MESSAGE.number);
    if (Number.isInteger(number) === false) throw new Error(ERROR_MESSAGE.integer);
  }

  static checkLottoNumber(number) {
    this.checkNumber(number);
    if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
      throw new Error(ERROR_MESSAGE.lottoRange);
    }
  }

  static checkLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_SIZE) throw new Error(ERROR_MESSAGE.lottoSize);
    const set = new Set(numbers);
    if (set.size !== LOTTO_SIZE) throw new Error(ERROR_MESSAGE.unique);

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
