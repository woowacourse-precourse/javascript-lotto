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

  validateInputPurchase(price) {
    if (isNaN(price)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE2);
    }
    if (price % 1000 !== 0) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE);
    }
    if (price < 0) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE3);
    }
  }
  
}

module.exports = App;
