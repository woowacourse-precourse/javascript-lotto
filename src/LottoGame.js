const MissionUtils = require("@woowacourse/mission-utils");

class LottoGame {
  constructor() {
    this.lottoCount = 0;
    this.purchasePrice = 0;
    this.lottos = [];
  }

  start() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (purchasePrice) => {
        this.purchasePrice = purchasePrice;
        this.lottoCount = purchasePrice / 1000;
        this.purchaseLotto();
      }
    );
  }

  purchaseLotto() {
    MissionUtils.Console.print(this.lottoCount + "개를 구매했습니다.");
    for (let i = 0; i < this.lottoCount; i++) {
      const Lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 20, 6);
      this.lottos.push(Lotto);
      MissionUtils.Console.print(Lotto);
    }
    MissionUtils.Console.print(this.lottos);
  }
}

module.exports = LottoGame;
