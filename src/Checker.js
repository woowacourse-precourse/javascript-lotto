class Checker {
  constructor() {}

  isCorrectMoney(money) {
    if (money % 1000 !== 0) {
      throw "[ERROR] 입력값이 1000원 단위가 아닙니다.";
    }
    if (isNaN(Number(money))) {
      throw "[ERROR] 입력값이 숫자가 아닙니다.";
    }
  }
}

module.exports = Checker;
