const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;
  numberOfMatches = 0;
  isBonus = false;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((comp1, comp2) => {
      return comp1 - comp2
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  compare(luckyNumbers, bonusNumber) {
    this.#numbers.filter(number => {
      if(luckyNumbers.includes(number)) {
        this.numberOfMatches += 1;
      }
    })

    if (this.#numbers.includes(bonusNumber)) {
      this.isBonus = true;
    }

    return this;
  }

  printResult () {
    return this;
  }
}

module.exports = Lotto;
