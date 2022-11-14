const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  manual() { // 당첨 번호가 유효하면 리턴하는 메서드
    let numbers = this.#numbers;
    for (let i = 0; i < 6; i++) {
      numbers[i] = (parseInt(numbers[i]));
    }
    return numbers;
  }

  validate(numbers) { // 당첨 번호의 유효성을 판단하는 메서드
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 6개의 숫자여야 합니다.");
    }
    for (let i = 0; i < 6; i++) {
      if ((isNaN(numbers[i])) || (!Number.isInteger(Number(numbers[i])))) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 6개의 숫자여야 합니다.");
      } else if ((parseInt(numbers[i]) < 1) || (46 < parseInt(numbers[i]))) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 6개의 숫자여야 합니다.");
      }
    }
    let numbers_set = new Set(numbers);
    if (numbers_set.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 6개의 숫자여야 합니다.");
    }
    return
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
