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
  isValidPurchase(number) {
    // 로또 구입 금액에 대한 유효성 검사
    number = Number(number);
    return Validation.isDivisible(number) && Validation.isAvailablePurchase(number) && Validation.isPositiveInteger(number);
  }
}

module.exports = User;
