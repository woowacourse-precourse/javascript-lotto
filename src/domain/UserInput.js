const MissionUtils = require("@woowacourse/mission-utils");

class UserInput {
  #message;

  constructor(message) {
    this.moneyInput(message);
  }

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {});
  }
}

module.exports = UserInput;
