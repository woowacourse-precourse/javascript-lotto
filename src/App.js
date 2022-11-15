const Lotto = require("./service/Lotto");
const Purchase = require("./service/Purchase");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/constants");

class App {
  constructor() {}
  play() {
    Console.readLine(GAME_MESSAGES.ASK_TO_PAY, (cost) => {
      const lottoNumbers = new Purchase(cost);
      const lottoResult = new Lotto(cost, lottoNumbers);
    });
  }
}

module.exports = App;
