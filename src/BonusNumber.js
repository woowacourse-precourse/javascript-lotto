const ERROR_NOT_ONLY_NUMBER = "[ERROR] 숫자만이 입력 가능합니다.";
const ERROR_OUT_OF_RANGE =
  "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.";
const ERROR_DUPLICATE_EXIST =
  "[ERROR] 6개의 당첨 번호로 입력한 숫자는 보너스 번호로 사용 할 수 없습니다.";

class BonusNumber {
  constructor(userLotto, bonus) {
    this.userLotto = userLotto;
    this.bonusForCheck = Number(bonus);

    this.checkOnlyNumber(bonus);
    this.checkNumberRanges();
    this.checkDuplicateWithWinningNumber();

    this.userBonus = Number(bonus);
  }

  checkOnlyNumber(bonus) {
    const bonusInputArray = bonus.split("");

    bonusInputArray.forEach((item) => {
      const ASCII = item.charCodeAt();

      if (ASCII < 48 || ASCII > 57) {
        throw new Error(ERROR_NOT_ONLY_NUMBER);
      }
    });
  }

  checkNumberRanges() {
    if (this.bonusForCheck < 1 || this.bonusForCheck > 45) {
      throw new Error(ERROR_OUT_OF_RANGE);
    }
  }

  checkDuplicateWithWinningNumber() {
    if (this.userLotto.includes(this.bonusForCheck)) {
      throw new Error(ERROR_DUPLICATE_EXIST);
    }
  }
}

module.exports = BonusNumber;
