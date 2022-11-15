const MIN_NUM = 1;
const MAX_NUM = 45;
const LOTTO_LENGTH = 6;

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.validate(numbers, bonusNumber);
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
  }

  isLenSix(num) {
    if (num.length !== LOTTO_LENGTH) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isDup(num) {
    const validCheckSet = new Set(num);
    if (validCheckSet.size !== num.length) {
      throw new Error('[ERROR] 로또 번호는 중복되는 번호가 없어야 합니다.');
    }
  }

  isBonusDup(num, bonusNum) {
    if (num.includes(bonusNum)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.');
    }
  }

  isNumValueOk(num, bonusNum) {
    let check = true;
    for (let index = 0; index < LOTTO_LENGTH; index += 1) {
      if (num[index] < MIN_NUM || num[index] > MAX_NUM) check = false;
    }
    if (bonusNum < MIN_NUM || bonusNum > MAX_NUM) check = false;

    if (check === false) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  validate(numbers, bonusNumber) {
    this.isLenSix(numbers);
    this.isDup(numbers);
    this.isBonusDup(numbers, bonusNumber);
    this.isNumValueOk(numbers, bonusNumber);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
