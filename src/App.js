const Lotto = require("./Lotto");
const Purchase = require("./Purchase");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants");

class App {
  play() {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (cost) => {
      const lottoNumbers = new Purchase(cost);
    });
    // const lotto = new Lotto(lottoNumbers);
    // lotto();
  }
}

const app = new App();
app.play();

module.exports = App;
