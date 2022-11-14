const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

class User {
  constructor() {
    this.numberOfPurchase = 0;
  }
  buyLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요", (userInput) => {
      this.isValidPurchase(userInput);
      this.numberOfPurchase = Number(userInput);
    });
  }
  isValidPurchase(amount) {
    // 로또 구입 금액에 대한 유효성 검사
    amount = Number(amount);
    return Validation.isDivisible(amount) && Validation.isAvailablePurchase(amount) && Validation.isPositiveInteger(amount);
  }
}

module.exports = User;
