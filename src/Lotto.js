const { ERR_LOTTO_CNT, ERR_LOTTO_DUP } = require('./Constants');
const { Console } = require('@woowacourse/mission-utils');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbers(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR_LOTTO_CNT);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== 6) {
      throw new Error(ERR_LOTTO_DUP);
    }
  }
  // TODO: 추가 기능 구현

  sortNumbers(numbers) {
    //로또 번호 정렬하여 저장
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }
  toString() {
    let return_str = '[';
    for (let number = 0; number < this.#numbers.length; number++) {
      if (number !== this.#numbers.length - 1) {
        return_str += `${this.#numbers[number]}, `;
      } else {
        return_str += `${this.#numbers[number]}`;
      }
    }
    return_str += ']';
    Console.print(return_str);
  }
}

module.exports = Lotto;
