const { PICK_TYPE } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers, type) {
    // this.validate(numbers, type);
    this.#numbers = numbers;
  }

  validate(numbers, type) {
    if (numbers.length !== 6 && type === PICK_TYPE.main) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== 6 && type === PICK_TYPE.bonus) {
      throw new Error('[ERROR] 보너스 번호는 1개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  printLotto() {
    console.log(this.#numbers);
  }

  checkWin(lotto) {
    const splitNumber = this.#numbers.split(',');
    let count = 0;
    lotto.forEach((item, index) => {
      if (item === +splitNumber[index]) count += 1;
    });
    return count;
  }
}

module.exports = Lotto;
