import { exceptLottoNumbers } from './Exception';

class Lotto {
  //로또 당첨 번호
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers = []) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }

    numbers.map((numbersData) => {
      exceptLottoNumbers(numbersData);
    });
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;

