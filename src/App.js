const Lotto = require("./Lotto");
const Purchase = require("./Purchase");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants");

class App {
  constructor() {
    this.cost = undefined;
    this.lottoNumbers = undefined;
    this.winningNumber = undefined;
    this.bonusNumber = undefined;
  }
  play() {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (cost) => {
      const lottoNumbers = new Purchase(cost);
      this.lottoNumbers = lottoNumbers;
      const lotto = new Lotto(cost, this.lottoNumbers);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
