const ERROR_NOT_ONLY_NUMBER = "[ERROR] 숫자만이 입력 가능합니다.";
const ERROR_OUT_OF_RANGE =
  "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.";
const ERROR_DUPLICATE_EXIST =
  "[ERROR] 6개의 당첨 번호로 입력한 숫자는 보너스 번호로 사용 할 수 없습니다.";

class BonusNumber {
  constructor(lotto, bonus) {
    this.userLotto = lotto;
    this.checkOnlyNumber(bonus);

    const bonusTypeofNumber = Number(bonus);
    this.checkNumberRanges(bonusTypeofNumber);
    this.checkDuplicateWithWinningNumber(bonusTypeofNumber);
  }

  checkOnlyNumber(bonus) {
    const regex = /^\d+$/;

    if (!regex.test(bonus)) {
      throw new Error(ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRanges(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR_OUT_OF_RANGE);
    }
  }

  checkDuplicateWithWinningNumber(bonus) {
    if (this.userLotto.includes(bonus)) {
      throw new Error(ERROR_DUPLICATE_EXIST);
    }
  }
}

module.exports = BonusNumber;
