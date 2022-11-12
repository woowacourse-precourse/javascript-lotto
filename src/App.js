const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.lotto = new Lotto();
  }
  play() {
    this.lotto.start();
  }
}

const app = new App();
app.play();

module.exports = App;
