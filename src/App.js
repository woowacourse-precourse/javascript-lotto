const Lotto = require('./Lotto');
const PlayLotto = require('./playLotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.PlayLotto = new PlayLotto();
  }

  play() {
    this.PlayLotto.playGame();
    MissionUtils.Console.close();
  }
}

module.exports = App;
