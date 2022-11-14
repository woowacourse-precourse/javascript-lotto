const MissionUtils = require("@woowacourse/mission-utils");

class UserInput {
  #message;

  constructor(message) {
    this.moneyInput(message);
  }

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      this.checkExceptCaseInMoney(userInput);
    });
  }

  checkExceptCaseInMoney(money) {
    const remains = money % 1000;
    return remains > 0 ? false : true;
  }
}

module.exports = UserInput;
