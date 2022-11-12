const MissionUtils = require('@woowacourse/mission-utils');
const LottoGame = require('./LottoGame');

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  play() {
    this.lottoGame.buyLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
