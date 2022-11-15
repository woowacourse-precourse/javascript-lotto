const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const Statistics = require("./Statistics");

class App {
  play() {
    this.MyLottoResult();
    this.getInputLottoNum();
    this.printWinContent();
  }
}

module.exports = App;
