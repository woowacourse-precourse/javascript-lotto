const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.lottoNumberMax = 45;
    this.lottoNumberMin = 1;
    this.validate(numbers);
    this.duplicate(numbers);
    this.numberLimit(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicate(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  numberLimit(numbers) {
    numbers.forEach((number) => {
      if (number > this.lottoNumberMax || number < this.lottoNumberMin) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    })
  }
}

module.exports = Lotto;
