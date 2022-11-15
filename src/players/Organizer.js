const Validator = require('../Validator');

class Organizer {
  constructor() {
    this.winningNumbers;
    this.bonusNumber;
  }

  setWinningNumbers(numbers) {
    this.validateWinningNumbers(numbers);
    this.winningNumbers = numbers;
  }

  setBonusNumber(bonusNumber) {
    this.validateBonusNumber(this.winningNumbers, bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validateWinningNumbers(numbers) {
    Validator.checkLottoNumberListLength(numbers) &&
      Validator.checkNumberListNotDuplicated(numbers) &&
      Validator.checkNumberListInRange(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    Validator.checkNumberInRange(bonusNumber) &&
      Validator.checkBonusNumberNotDuplicated(winningNumbers, bonusNumber);
  }

  getResultMessage({ first, second, third, forth, fifth, earningRate }) {
    return `
당첨 통계
---
3개 일치 (5,000원) - ${fifth}개
4개 일치 (50,000원) - ${forth}개
5개 일치 (1,500,000원) - ${third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개
6개 일치 (2,000,000,000원) - ${first}개
총 수익률은 ${earningRate}%입니다.`;
  }
}
module.exports = Organizer;
