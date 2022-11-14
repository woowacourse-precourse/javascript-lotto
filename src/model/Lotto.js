const LottoNumber = require('./LottoNumber');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((number) => {
      const lottoNumber = new LottoNumber(number);
      return lottoNumber.value;
    }).sort((a, b) => a - b);
  }

  validate(numbers) {
    Validator.validateNumbersLength(numbers);
    Validator.validateUnique(numbers);
  }

  get numbers() {
    return [...this.#numbers];
  }

  static judgeLotto(winningLotto, bonusNumber, publishedLotto) {
    return publishedLotto.reduce((judgedResult, number) => {
      if (winningLotto.includes(number)) {
        judgedResult.numberOfSame += 1;
      }

      if (bonusNumber === number) {
        judgedResult.isBonusNumberSame = true;
      }

      return judgedResult;
    }, {
      numberOfSame: 0,
      isBonusNumberSame: false,
    });
  }
}

module.exports = Lotto;
