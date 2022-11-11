const { Random } = require('@woowacourse/mission-utils');

// TODO: 6, 1, 45 같은 상수 어떻게 처리할것인지?

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  // NOTE: 메서드 안에서 this쓰면 static 지워도 됨
  static validate(numbers, numbersCount = 6) {
    if (numbers.length !== numbersCount) {
      throw new Error(`[ERROR] 로또 번호는 ${numbersCount}개여야 합니다.`);
    }
  }

  static purchase(numberCount = 6, minNumber = 1, maxNumber = 45) {
    const lotto = [];

    while (lotto.length < numberCount) {
      const pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);

      if (!lotto.includes(pickedNumber)) {
        lotto.push(pickedNumber);
      }
    }

    return lotto;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
