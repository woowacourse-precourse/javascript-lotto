class BonusNumber {
  constructor(userLotto, bonus) {
    this.userLotto = userLotto;
    this.checkOnlyNumber(bonus);
    this.checkNumberRanges(bonus);
    this.checkDuplicateWithWinningNumber(bonus);
  }

  checkOnlyNumber(bonus) {
    const bonusInputArray = bonus.split("");

    bonusInputArray.forEach((item) => {
      const ASCII = item.charCodeAt();

      if (ASCII < 48 || ASCII > 57) {
        throw new Error("[ERROR] 숫자만이 입력 가능합니다.");
      }
    });
  }

  checkNumberRanges(bonus) {
    const bonusNumber = Number(bonus);

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  checkDuplicateWithWinningNumber(bonus) {
    const bonusNumber = Number(bonus);

    if (this.userLotto.includes(bonusNumber)) {
      throw new Error(
        "[ERROR] 6개의 당첨 번호로 입력한 숫자는 보너스 번호로 사용 할 수 없습니다."
      );
    }
  }
}

module.exports = BonusNumber;
