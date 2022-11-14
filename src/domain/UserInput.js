const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHACE_MESSAGE } = require("../constants/constant");
const MessageOutput = require("./MessageOutput");

class UserInput {
  #message;

  messageOutput = new MessageOutput();

  constructor(message) {
    this.message = message;
  }

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      if (this.checkExceptCaseInMoney(userInput)) {
        this.messageOutput.printMesage(
          `${userInput / 1000}${PURCHACE_MESSAGE}`
        );
      }
      return;
    });
  }

  checkExceptCaseInMoney(money) {
    const remains = money % 1000;
    return remains > 0 ? false : true;
  }
}

module.exports = UserInput;
