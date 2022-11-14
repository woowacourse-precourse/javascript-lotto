const MissionUtils = require("@woowacourse/mission-utils");
class App {
  #numberOfLottos;
  play() {
    this.inputMoneyToBuyLottos();
  }
  inputMoneyToBuyLottos() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (moneyToBuyLottos) => {
      const regex = /^[1-9]+[0-9]*[0]{3}$/;
      if (!regex.test(moneyToBuyLottos))
        throw new Error("[ERROR] 구입 금액은 1000원 단위의 금액을 입력해주세요");
      this.#numberOfLottos = Number(moneyToBuyLottos)/1000;
    });
  }
}

module.exports = App;
