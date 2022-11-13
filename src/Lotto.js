const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlap_check(numbers);
    this.number_check(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  overlap_check(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }

  number_check(numbers) {
    numbers.forEach((e) => {
      if (e < 1 || e > 45) {
        throw new Error('[ERROR] 로또 번호의 범위는 1~45까지입니다.');
      }
    });
  }

  print_lotto() {
    this.#numbers = this.#numbers.sort((a, b) => {
      return Number(a) - Number(b);
    });
    MissionUtils.Console.print(
      `[${this.#numbers[0]}, ${this.#numbers[1]}, ${this.#numbers[2]}, ${
        this.#numbers[3]
      }, ${this.#numbers[4]}, ${this.#numbers[5]}]`
    );
  }

  matching_number(win, bonus) {
    let count = 0;
    this.#numbers.forEach((e) => {
      if (win.includes(e)) {
        count += 1;
      }
    });
    if (count === 5) {
      if (win.includes(bonus)) {
        return 10; //5개 일치, 보너스 볼 일치 ->10
      }
      return count;
    }
    return count;
  }
}

module.exports = Lotto;
