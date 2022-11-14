const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (45 < numbers[i] || 1 > numbers[i]) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
    const overlapConfirmSet = new Set(numbers);
    if (overlapConfirmSet.size !== 6) {
      throw new Error("[ERROR] 중복된 번호는 올 수 없습니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateBonusNum(bonusNum) {
    if (this.#numbers.includes(Number(bonusNum)) == true) {
      throw new Error("[ERROR] 당첨 번호와 같은 번호는 올 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
