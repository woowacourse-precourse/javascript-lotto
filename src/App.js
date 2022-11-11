const MissionUtils = require("@woowacourse/mission-utils");
const DomainLogic1 = require("./DomainLogic1.js");

class App {
  constructor() {
    this.domain = new DomainLogic1();
  }
  play() {
    this.domain.getMoneyToSpend();
  }
}

module.exports = App;
