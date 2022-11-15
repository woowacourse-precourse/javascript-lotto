const inputDataObject = require('../src/model/InputDataObject');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const regex = /^[0-9]+$/;

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.filter(size => {
      if (!(size >= 1 && size <= 45) || !regex.test(size)) {
        throw new Error('[ERROR] 입력 범위를 초과합니다.');
      }
    });
    if (new Set(numbers).size < numbers.length) {
      throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    }
    return this.compareLotto();
  }

  compareLotto() {
    inputDataObject.correctNumber = inputDataObject.raffle
      .map(index =>
        inputDataObject.raffleNumbers.filter(x => index.includes(x)),
      )
      .filter(index => index.length > 2)
    return this.averageReturn();
  }
}

module.exports = Lotto;
