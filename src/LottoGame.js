const MissionUtils = require("@woowacourse/mission-utils");

class LottoGame {
  constructor() {
    this.lottoCount = 0;
    this.purchasePrice = 0;
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = "";
    this.countEachWinningCost = [0, 0, 0, 0, 0];
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
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (inputBonusNumber) => {
        this.bonusNumber = Number(inputBonusNumber);
        this.compareWinningLotto();
        this.printLottoResult();
      }
    );
  }
  countMatchLotto(winningNumbers, lottoNumbers) {
    const addedArrSize = [...winningNumbers, ...lottoNumbers].length;
    const delteDuplicateArrSize = new Set([...winningNumbers, ...lottoNumbers])
      .size;
    return addedArrSize - delteDuplicateArrSize;
  }

  countWinningCost(countMatch, lotto) {
    if (countMatch === 3) this.countEachWinningCost[0]++;
    if (countMatch === 4) this.countEachWinningCost[1]++;
    if (countMatch === 4 && lotto.includes(this.bonusNumber))
      this.countEachWinningCost[3]++;
    if (countMatch === 5) this.countEachWinningCost[2]++;
    if (countMatch === 6) this.countEachWinningCost[4]++;
  }
}

module.exports = LottoGame;
