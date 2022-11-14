const { Random } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

// TODO: 6, 1, 45 같은 상수 어떻게 처리할것인지?

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  // TODO: 이 numbers는 어떨때 사용?
  get numbers() {
    return this.#numbers;
  }

  static isValidBonusNumber(bonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 로또 번호와 보너스 번호는 서로 달라야 합니다.');
    }
  }

  static isValidLottoNumber(number) {
    return number >= 1 && number <= 45;
  }

  static isValidLottoNumbers(numbers, numbersCount) {
    if (numbers.length !== numbersCount) {
      throw new Error(`[ERROR] 로또 번호는 ${numbersCount}개여야 합니다.`);
    }

    if (!numbers.every(Validator.isValidNumber)) {
      throw new Error('[ERROR] 숫자가 아닌 입력이 있습니다.');
    }

    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.');
    }
  }

  static validate(numbers, numbersCount = 6) {
    Lotto.isValidLottoNumbers(numbers, numbersCount);

    if (!numbers.every(Lotto.isValidLottoNumber)) {
      throw new Error(`[ERROR] 로또 번호는 ${1}부터 ${45}까지 입니다.`);
    }
  }

  static purchase(numberCount = 6, minNumber = 1, maxNumber = 45) {
    const lotto = Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberCount);

    return lotto;
  }
}

module.exports = Lotto;
