const MissionUtils = require("@woowacourse/mission-utils");


class App {
  #money;

  constructor() {
  }

  play() {}

  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (userInput) => {
      this.validateMoney(userInput);
      this.#money = userInput;
    });
  }
}

module.exports = App;
