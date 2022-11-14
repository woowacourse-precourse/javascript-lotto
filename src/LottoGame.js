const MissionUtils = require("@woowacourse/mission-utils");

class LottoGame {
  constructor() {
    this.lottoCount = 0;
    this.purchasePrice = 0;
  }

  start() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (purchasePrice) => {
        this.purchasePrice = purchasePrice;
        this.lottoCount = purchasePrice / 1000;
      }
    );
  }
}

module.exports = LottoGame;
