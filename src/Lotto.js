const {
  checkSplitSymbol,
  checkNumberOfDigit,
  checkMainNumberInRange,
  checkBonusNumberInRange,
  checkMainNumberOverlap,
  checkBonusNumberOverlap,
} = require('./Validation');
const { PICK_TYPE } = require('./Constants/PICK');

class Lotto {
  #numbers;

  constructor(numbers, type) {
    this.validate(numbers.split(',').map(Number), type);
    this.#numbers = numbers.split(',').map(Number);
  }

  // 추후 검증 파트를 개별 파일로 분리할 예정
  validate(numbers, type) {
    if (type === PICK_TYPE.main) {
      checkSplitSymbol(numbers);
      checkMainNumberInRange(numbers);
      checkMainNumberOverlap(numbers);
    }
    if (type === PICK_TYPE.bonus) {
      checkBonusNumberInRange(numbers);
      checkBonusNumberOverlap(numbers);
    }
    checkNumberOfDigit(numbers);
  }

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
