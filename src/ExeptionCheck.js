const App = require("./App");
const { Console } = require("@woowacourse/mission-utils");

class ExceptionCheck {

  userInputMoneyValue(moneyValue) {
    if (moneyValue % 1000 !== 0 || moneyValue === 0) {
      throw new Error("[ERROR] 구매 금액은 1,000 단위로 입력해주세요");
    }
  }
}

module.exports = ExceptionCheck;