const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  getInputPurchaseAmount(callback) {
    MissionUtils.Console.readLine("구매금액을 입력해 주세요.", callback);
  }

  calculateNumberOfTickets(price) {
    this.validateInputPurchase(price);
    const numberOfTickets = Math.floor(price / 1000);
    return numberOfTickets;
  }

}

module.exports = App;
