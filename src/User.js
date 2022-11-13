const MissionUtils = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.numberOfPurchase = 0;
  }
  buyLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요", (userInput) => {
      this.numberOfPurchase = Number(userInput);
    });
  }
}

module.exports = User;
