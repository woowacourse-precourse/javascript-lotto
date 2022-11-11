const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #money;

  constructor() {
    this.#money = 0;
  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#money = Number(money);
      console.log(this.#money);
    });
  }

}

const lottoMachine = new LottoMachine();
lottoMachine.inputMoney();

module.exports = LottoMachine;
