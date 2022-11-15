const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const utils = require("./utils.js");
const print = require("./print.js");

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
        utils.checkValiPrice(purchasePrice);
        this.purchasePrice = purchasePrice;
        this.lottoCount = purchasePrice / 1000;
        this.purchaseLotto();
      }
    );
  }

  purchaseLotto() {
    for (let i = 0; i < this.lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 46, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto.getLotto());
    }
    this.printLottoInfo();
  }

  printLottoInfo() {
    print.lottoInfo(this.lottoCount, this.lottos);
    this.inputWinninNumbers();
  }

  inputWinninNumbers() {
    MissionUtils.Console.readLine(
      "\n당첨번호를 입력해 주세요.\n",
      (winningNumbers) => {
        utils.checkValidWinningNumber(winningNumbers);
        this.winningNumbers = winningNumbers
          .split(",")
          .map((number) => Number(number));
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (inputBonusNumber) => {
        this.bonusNumber = Number(inputBonusNumber);
        this.compareWinningLotto();
        this.printLottoResult();
      }
    );
  }

  compareWinningLotto() {
    for (let i = 0; i < this.lottos.length; i++) {
      this.countWinningCost(
        this.countMatchLotto(this.winningNumbers, this.lottos[i]),
        this.lottos[i]
      );
    }
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
    if (countMatch === 5)
      lotto.includes(this.bonusNumber)
        ? this.countEachWinningCost[3]++
        : this.countEachWinningCost[2]++;
    if (countMatch === 6) this.countEachWinningCost[4]++;
  }

  printLottoResult() {
    print.lottoResult(this.countEachWinningCost, this.purchasePrice);
  }
}

module.exports = LottoGame;
