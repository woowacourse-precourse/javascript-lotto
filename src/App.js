const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const Statistics = require("./Statistics");

class App {
  play() {
    this.getInputAmount();
    this.getMyLottoNum();
    this.getInputLottoNum();
    this.winCost();
    this.getEarningsRate();
  }
}

module.exports = App;
