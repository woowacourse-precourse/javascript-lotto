const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

class User {
  constructor() {
    this.numberOfPurchase = 0;
  }
  buyLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요", (userInput) => {
      const input = userInput;
      if (Validation.isDivisible(input)) {
        this.numberOfPurchase = Number(userInput);
      } else {
        throw new Error("[ERROR] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않습니다. 종료합니다.");
      }
    });
  }
}

module.exports = User;
