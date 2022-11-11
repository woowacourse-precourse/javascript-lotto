const MissionUtils = require("@woowacourse/mission-utils");

const mConsole = MissionUtils.Console;

class LottoGame {
  getMoney() {
    mConsole.readLine("구입금액을 입력해 주세요.\n", (purchaseAmount) => {
      return purchaseAmount;
    });
  }
}

const lottoGame = new LottoGame();
lottoGame.getMoney();

module.exports = LottoGame;
