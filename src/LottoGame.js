const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const mConsole = MissionUtils.Console;

class LottoGame {
  constructor() {
    this.validation = new Validation();
  }

  getMoney() {
    mConsole.readLine("구입금액을 입력해 주세요.\n", (purchaseAmount) => {
      if (this.validation.isValidMoney(purchaseAmount)) return purchaseAmount;
    });
  }
}

const lottoGame = new LottoGame();
lottoGame.getMoney();

module.exports = LottoGame;
