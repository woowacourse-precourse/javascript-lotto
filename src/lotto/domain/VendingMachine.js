class VendingMachine {
  setMoney(money) {
    this.validate(money);
    this.money = money;
  }

  validate(money) {
    if (isNaN(money) === true) {
      throw new Error("[ERROR] 금액은 숫자만 입력해야 합니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }
}

module.exports = VendingMachine;
