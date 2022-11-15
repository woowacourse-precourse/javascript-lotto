const { Console } = require('@woowacourse/mission-utils');

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
    function hasDuplicates(arr) {
      return new Set(arr).size !== arr.length;
    }
    if (hasDuplicates(numbers)) throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");

  }

  compare(lottos, bonus) {
    let result = [];
    for (let lotto of lottos) {
      // let correct = this.#numbers.filter(x => lotto.includes(x));
      let correct = this.#numbers.filter(x => lotto.includes(x));
      Console.print(this.#numbers);
      if (correct.length === 5 && this.isBonusCorrect(lotto, bonus)) {
        result.push(-1);
        continue;
      }
      if (correct.length >= 3) result.push(correct.length);
    }
    Console.print(result)
    return result;
  }

  isBonusCorrect(lotto, bonus) {
    return lotto.includes(bonus);
  }
}

module.exports = Lotto;
