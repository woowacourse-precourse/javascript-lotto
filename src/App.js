const MissionUtils = require("@woowacourse/mission-utils");
class App {
  #numberOfLottos;
  play() {
    this.inputMoneyToBuyLottos();
  }
  inputMoneyToBuyLottos() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (moneyToBuyLottos) => {
      this.#numberOfLottos = Number(moneyToBuyLottos)/1000;
    });
  }
}

module.exports = App;
