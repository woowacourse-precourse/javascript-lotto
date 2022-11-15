const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  purchaseTicket() {
    this.getInputPurchaseAmount(this.manageInputPurchaseAmount.bind(this));
  }

  manageInputPurchaseAmount(price) {
    const numberOfTickets = this.calculateNumberOfTickets(price);
    MissionUtils.Console.print(`${numberOfTickets}개를 구매했습니다.`);
    // this.generateTickets(numberOfTickets);
  }

  getInputPurchaseAmount(callback) {
    MissionUtils.Console.readLine("구매금액을 입력해 주세요.", callback);
  }

  calculateNumberOfTickets(price) {
    this.validateInputPurchase(price);
    const numberOfTickets = price / 1000;
    return numberOfTickets;
  }

  validateInputPurchase(price) {
    if (isNaN(price)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE);
    }
    if (price % 1000 !== 0) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE2);
    }
    if (price < 0) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE3);
    }
  }
}

module.exports = App;
