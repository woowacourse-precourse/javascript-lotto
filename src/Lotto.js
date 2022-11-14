const { Random } = require('@woowacourse/mission-utils');
const LottoValidator = require('./LottoValidator');

// TODO: 6, 1, 45 같은 상수 어떻게 처리할것인지?

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

  static purchase(numberCount = 6, minNumber = 1, maxNumber = 45) {
    const lotto = Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberCount);

    return lotto;
  }
}

module.exports = Lotto;
