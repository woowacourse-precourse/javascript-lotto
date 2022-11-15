const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#showNumbers();
  }
  
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.#hasDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
    }
  }

  #showNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
    MissionUtils.Console.close();
  }

  #hasDuplicate(numbers) {
    const eliminateDuplicate = numbers.reduce((acc, number) => {
      if (!acc.includes(number)) {
        acc.push(number);
      }
      return acc;
    }, []);
    return eliminateDuplicate.length !== 6;
  }

}

module.exports = Lotto;
