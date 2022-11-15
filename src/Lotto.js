const {Console, Random} = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  deduplication(numbers) {
    const uniq = array => [...new Set(array)];
    if (uniq(numbers).length !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  outerRange(numbers) {
    numbers.forEach( number => {
      if (number > 0 && number < 46) {
        throw new Error("[ERROR] 로또 번호의 숫자 범위는 1 ~ 45까지 입니다.");
      }
    });
  }

  validateMoney(money) {
    if (money%1000 !== 0) {
      throw new Error("[ERROR] 구입 금액을 1000원 단위로 입력해주세요.");
    }
  }

  randomGeneration() {
    const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomLotto.sort((a, b) => a - b);
    return randomLotto;
  }

  createLotto(frequency) {
    const lotto = [];
    while (frequency) {
      frequency--;
      lotto.push(this.randomGeneration());
    }
    return lotto;
  }
}

module.exports = Lotto;