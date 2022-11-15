const {
  checkSplitSymbol,
  checkMainNumber,
  checkBonusNumber,
  checkRange,
  checkMainNumberOverlap,
  checkBonusNumberOverlap,
} = require('../Utils/Validation');
const { PICK_INDEX } = require('../Constants/PICK');

class Lotto {
  #numbers;

  constructor(mainNumber, bonusNumber) {
    this.validate(mainNumber.toString().split(',').map(Number), +bonusNumber);
    this.#numbers = mainNumber.toString().split(',').map(Number);
    this.#numbers.push(+bonusNumber);
  }

  validate(mainNumber, bonusNumber) {
    checkSplitSymbol(mainNumber);
    checkMainNumber(mainNumber);
    checkBonusNumber(bonusNumber);
    checkRange(mainNumber, bonusNumber);
    checkMainNumberOverlap(mainNumber);
    checkBonusNumberOverlap(mainNumber, bonusNumber);
  }

  checkWin(lotto) {
    const main = this.#numbers.slice(PICK_INDEX.mainStart, PICK_INDEX.bonusStart);
    const bonus = this.#numbers[PICK_INDEX.bonusStart];
    let count = 0;
    let bonusCount = 0;

    lotto.forEach((number) => {
      if (main.includes(number)) count += 1;
      if (bonus === number) bonusCount += 1;
    });

    return [count, bonusCount];
  }
}

module.exports = Lotto;
