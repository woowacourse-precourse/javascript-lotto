const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const Ask = require("../src/Ask");

class App {
  play() {

    const ask = new Ask();
    ask.money();

    MissionUtils.Console.close();
  }
}

module.exports = App;
