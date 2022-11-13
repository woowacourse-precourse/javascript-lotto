const { Console } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");

class View {
  constructor(controller) {
    this.controller = controller;
  }

  getPurchasingAmountFromUser() {
    Console.readLine(messages.PURCHASING_AMOUNT_MESSAGE, (userInput) => {
      this.controller.setPurchasingAmount(userInput);
    });
  }

  printPurchasingAmountErrorMessage() {
    throw new Error(messages.PURCHASING_AMOUNT_ERROR_MESSAGE);
  }

  printUserLottoArray() {
    Console.print(
      `\n${this.controller.userNumber.getUserLottoArray().length}${
        messages.USER_LOTTO_CONFIRMATION_MESSAGE
      }`,
    );
  }
}

module.exports = View;
