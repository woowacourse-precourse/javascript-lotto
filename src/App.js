const MissionUtils = require('@woowacourse/mission-utils');
const Cost = require('./Cost');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.cost;
  }

  getCost() {
    Console.readLine('구입금액을 입력해 주세요.', userInputCost => {
      this.cost = new Cost(userInputCost);
    });
  }

  play() {
    this.getCost();
  }
}

module.exports = App;
