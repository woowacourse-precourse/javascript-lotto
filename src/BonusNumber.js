class BonusNumber {
  constructor(bonus) {
    this.checkOnlyNumber(bonus);
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
}

module.exports = BonusNumber;
