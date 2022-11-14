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
    this.ranks = [];

    this.createLottos();
  }

  printCount() {
    MissionUtils.Console.print("\n");
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
  }

  printLottos() {
    this.printCount();

    this.lottos.forEach((lotto) => {
      lotto.printLotto();
    });

    MissionUtils.Console.print("\n");
  }

  createLottos() {
    let numbers = [];

    for (let num = 0; num < this.count; num++) {
      numbers = this.generateLottoNumbers.generate();

      this.lottos.push(new Lotto(numbers));
    }
  }

  createRanks(winningNumbers, bonusNum) {
    this.lottos.forEach((lotto) => {
      this.ranks.push(lotto.getRank(winningNumbers, bonusNum));
    });

    this.ranks = this.ranks.filter((rank) => rank !== 0);
  }

  printResult(winningNumber, bonusNum) {
    this.createRanks(winningNumber, bonusNum);

    const result = this.ranks.reduce((accu, curr) => {
      accu.set(curr, (accu.get(curr) || 0) + 1);
      return accu;
    }, new Map());

    const statisticsMsg = [
      "6개 일치 (2,000,000,000원) - ",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      "5개 일치 (1,500,000원) - ",
      "4개 일치 (50,000원) - ",
      "3개 일치 (5,000원) - ",
    ];

    const winningMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    MissionUtils.Console.print("당첨 통계\n---");
    let userWinningMoney = 0;

    for (let rank = RANK.FIFTH; rank >= RANK.FIRST; rank--) {
      let cnt = 0;

      if (result.has(rank)) {
        cnt = result.get(rank);
        userWinningMoney += winningMoney[rank - 1] * result.get(rank);
      }

      MissionUtils.Console.print(`${statisticsMsg[rank - 1]}${cnt}개`);
    }

    this.printRevenueRate(userWinningMoney);
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
