const { Console } = require('@woowacourse/mission-utils');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (isDuplicated(numbers)) {
      throw new Error('[ERROR] 중복된 번호가 없어야 합니다.');
    }
    Console.print('중복되지 않은 6개의 번호 입니다.');
  }
}

const isDuplicated = (arr) => {
  const set = new Set(arr);
  if (set.size !== 6) {
    return true;
  }
  return false;
};

module.exports = Lotto;
