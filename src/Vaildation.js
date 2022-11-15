class Vaildation {
  constructor(number) {
    this.isVaildBounsNumber(number);
    this.number = number;
  }

  isVaildBounsNumber(number) {
    const numberPattern = /[^0-9]/g;
    if (numberPattern.test(number)) {
      throw new Error("[ERROR] 숫자만 입력하세요.");
    }

    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1~45 사이에 숫자만 입력하세요.");
    }
  }
}

module.exports = Vaildation;
