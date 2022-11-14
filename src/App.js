const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const Ask = require("../src/Ask");

class App {
  play() {

    const ask = new Ask();
    const lotto = new Lotto();

    ask.money();
    ask.buyLotto();

    MissionUtils.Console.close();
  }
}

module.exports = App;
