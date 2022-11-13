const { Console } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");

class View {
  constructor(controller) {
    this.controller = controller;
  }

  getPurchasingAmountFromUser() {
    Console.readLine(messages.PURCHASING_AMOUNT_MESSAGE, (userInput) => {
      this.controller.userNumber.setPurchasingAmount(userInput);
    });
  }
}

module.exports = View;
