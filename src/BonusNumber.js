class BonusNumber {
  constructor(bonus) {
    this.checkOnlyNumber(bonus);
    this.checkNumberRanges(bonus);
  }

  checkOnlyNumber() {
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
}

module.exports = BonusNumber;
