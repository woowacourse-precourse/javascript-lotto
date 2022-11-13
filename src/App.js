const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;
const Lotto = require("./Lotto.js");
const LottoTicket = require("./LottoTicket.js");


class App {
  play() {
    Console.print("test");
    let lotto = new LottoTicket();
    Console.print(lotto.getNumbers());
  }
}

const app = new App();
app.play();

module.exports = App;
