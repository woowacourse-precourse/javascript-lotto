const Lotto = require("./Lotto");
const Exception = require("./error");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant.js");

class App {
  constructor() {
    this.lotto = new Lotto();
    this.exception = new Exception();
  }

  play() {
    this.askLottoCost();
  }

  askLottoCost() {
    Console.readLine(`${MESSAGE.START}\n`, (cost) => {
      this.lotto.cost = Number(cost);
      this.exception.checkString(this.lotto.cost);
      this.lotto.lottoCount = parseInt(this.lotto.cost / 1000);
      this.lotto.printMylotto(this.lotto.lottoCount);
    });
  }
}

module.exports = App;
