const App = require("./App");


class ExeptionCheck {

  userInputMoneyValue(moneyValue) {
    if (moneyValue % 1000 !== 0 || moneyValue > 0) {
      throw new Error("[ERROR] 구매 금액은 1,000 단위로 입력해주세요");
    }
  }
}

module.exports = ExeptionCheck;