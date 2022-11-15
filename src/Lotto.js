const { Random } = require('@woowacourse/mission-utils');
const LottoValidator = require('./LottoValidator');
const { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } = require('./lottoOptions');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  static isValidBonusNumber(bonusNumber, lottoNumbers) {
    new LottoValidator().isValidBonusNumber(bonusNumber, lottoNumbers);
  }

  static validate(numbers) {
    new LottoValidator().isValidLottoNumbers(numbers);
  }

  static purchase(numberCount = NUMBER_COUNT, minNumber = MIN_NUMBER, maxNumber = MAX_NUMBER) {
    const lotto = Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberCount);

    return lotto;
  }
}

module.exports = Lotto;
