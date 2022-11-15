const MissionUtils = require("@woowacourse/mission-utils");
const GenerateLottoNumbers = require("./GenerateRandomNumbers");
const Lotto = require("./Lotto");
const Validate = require("../Validate");
const { UNIT, RANK } = require("../utils/constants");

class Lottos {
  constructor(purchaseAmount) {
    this.validate = new Validate();
    this.validate.checkMoneyInput(purchaseAmount);

    this.purchaseAmount = purchaseAmount;
    this.generateLottoNumbers = new GenerateLottoNumbers();
    this.count = purchaseAmount / UNIT.DIVIDE;
    this.lottos = [];

    this.createLottos();
  }

  createLottos() {
    let numbers = [];

    for (let num = 0; num < this.count; num++) {
      numbers = this.generateLottoNumbers.generate();

      this.lottos.push(new Lotto(numbers));
    }
  }

  printLottoCount() {
    MissionUtils.Console.print("\n");
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
  }

  printLottos() {
    this.printLottoCount();

    this.lottos.forEach((lotto) => {
      lotto.printLotto();
    });

    MissionUtils.Console.print("\n");
  }

  getRanks(winningNumbers, bonusNum) {
    let ranks = [];

    this.lottos.forEach((lotto) => {
      ranks.push(lotto.getRank(winningNumbers, bonusNum));
    });

    ranks = ranks.filter((rank) => rank !== 0);

    return ranks;
  }

  getResult(winningNumber, bonusNum) {
    const ranks = this.getRanks(winningNumber, bonusNum);

    const result = ranks.reduce((accu, curr) => {
      accu.set(curr, (accu.get(curr) || 0) + 1);
      return accu;
    }, new Map());

    return result;
  }

  printResult(winningNumber, bonusNum) {
    const result = this.getResult(winningNumber, bonusNum);

    let { userWinningMoney, userWinningCount } =
      this.createUserWinningData(result);

    MissionUtils.Console.print("당첨 통계\n---");

    this.printWinningStatistics(userWinningCount.reverse());
    this.printRevenueRate(userWinningMoney);
  }

  createUserWinningData(result) {
    const winningMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    let userWinningMoney = 0;
    let userWinningCount = [];

    for (let rank = RANK.FIFTH; rank >= RANK.FIRST; rank--) {
      let cnt = 0;

      if (result.has(rank)) {
        cnt = result.get(rank);
        userWinningMoney += winningMoney[rank - 1] * result.get(rank);
      }

      userWinningCount.push(cnt);
    }

    return { userWinningMoney, userWinningCount };
  }

  printWinningStatistics(userWinningCount) {
    const statisticsMsg = [
      "6개 일치 (2,000,000,000원) - ",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      "5개 일치 (1,500,000원) - ",
      "4개 일치 (50,000원) - ",
      "3개 일치 (5,000원) - ",
    ];

    for (let rank = RANK.FIFTH; rank >= RANK.FIRST; rank--)
      MissionUtils.Console.print(
        `${statisticsMsg[rank - 1]}${userWinningCount[rank - 1]}개`
      );
  }

  calculateRevenueRate(userWinningMoney) {
    return (userWinningMoney / this.purchaseAmount) * 100;
  }

  printRevenueRate(userWinningMoney) {
    let revenueRate = this.calculateRevenueRate(userWinningMoney);

    MissionUtils.Console.print(
      `총 수익률은 ${revenueRate.toFixed(1)}%입니다.\n`
    );
  }
}

module.exports = Lottos;
