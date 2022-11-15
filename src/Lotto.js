const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.validatedLottoNumbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.map((number, index) => {
      if (numbers.indexOf(number) !== index) {
        Console.close();
        throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
      }

      if (number > 45 || number < 1) {
        Console.close();
        throw new Error('[ERROR] 로또 번호는 1~45 범위여야 합니다.');
      }
    });
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
