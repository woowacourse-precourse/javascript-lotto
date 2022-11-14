class InputMoney {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    // 숫자가 아닌 경우 예외 에러 처리
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    // 천원 단위가 아닌 경우 에러 처리
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 천원 단위로 입력해주세요.");
    }
  }
}

module.exports = InputMoney;
