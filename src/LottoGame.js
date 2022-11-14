const MissionUtils = require("@woowacourse/mission-utils");

class LottoGame {
  constructor() {
    this.lottoCount = 0;
    this.purchasePrice = 0;
    this.lottos = [];
    this.winningNumbers = [];
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

    this.inputWinninNumbers();
  }

  inputWinninNumbers() {
    MissionUtils.Console.readLine(
      "당첨번호를 입력해 주세요.\n",
      (winningNumbers) => {
        this.winningNumbers = winningNumbers
          .split(",")
          .map((number) => Number(number));
      }
    );
  }
}

module.exports = LottoGame;
