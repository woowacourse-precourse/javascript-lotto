const { Console } = require('@woowacourse/mission-utils');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        '[ERROR] 로또 번호는 6개여야 합니다. 쉼표(,)로 구분해주세요.'
      );
    }

    if (isDuplicated(numbers)) {
      throw new Error('[ERROR] 중복된 번호가 없어야 합니다.');
    }
    Console.print('중복되지 않은 6개의 번호 입니다.');

    numbers.forEach((number) => {
      if (isNaN(Number(number))) {
        throw new Error('[ERROR] 다른 형식이 아닌 숫자만 입력해 주세요.');
      }
    });
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
