const { PICK_TYPE, PICK_LENGTH } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers, type) {
    // this.validate(numbers, type);
    this.#numbers = numbers;
  }

  // 추후 검증 파트를 개별 파일로 분리할 예정
  validate(numbers, type) {
    if (numbers.length !== PICK_LENGTH.main && type === PICK_TYPE.main) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== PICK_LENGTH.bonus && type === PICK_TYPE.bonus) {
      throw new Error('[ERROR] 보너스 번호는 1개여야 합니다.');
    }
  }

  // 수정 필요
  checkWin(lotto, bonusNumber) {
    const winNumber = this.#numbers.split(',').map(Number);
    let count = 0;
    let bonusCount = 0;

    lotto.forEach((number) => {
      if (winNumber.includes(number)) count += 1;
      if (number === +bonusNumber) bonusCount += 1;
    });

    return [count, bonusCount];
  }
}

module.exports = Lotto;
