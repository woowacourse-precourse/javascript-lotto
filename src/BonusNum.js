class BonusNum {
  num;
  constructor(number) {
    this.validateIsOneDigit(number);
    vali;
    this.num = number;
  }
  validateIsOneDigit(number) {
    if (numbers > 9) {
      throw new Error("[ERROR]  번호는 6개여야 합니다.");
    }
  }

  validateIsNum(numbers) {
    numbers.map((e) => {
      if (isNaN(parseInt(e))) {
        throw new Error("숫자를 입력하세요!");
      }
    });
  }
}

module.exports = BonusNum;
