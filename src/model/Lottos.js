const MissionUtils = require("@woowacourse/mission-utils");
const GenerateLottoNumbers = require("./GenerateRandomNumbers");
const Lotto = require("./Lotto");
const { ERROR, UNIT, WINNING_MONEY } = require("../utils/constants");

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);

    this.generateLottoNumbers = new GenerateLottoNumbers();
    this.count = purchaseAmount / UNIT.DIVIDE;
    this.lottos = [];
    this.ranks = [];

    this.createLottos();
  }

  validate(money) {
    if (isNaN(Number(money))) {
      throw new Error(ERROR.ISNAN);
    }

    if (money % UNIT.DIVIDE !== 0) {
      throw new Error(ERROR.UNIT);
    }
  }

  getLotto() {
    const numbers = this.generateLottoNumbers.generate();

    return new Lotto(numbers);
  }

  createLottos() {
    let numbers = [];

    for (let num = 0; num < this.count; num++) {
      numbers = this.generateLottoNumbers.generate();

      this.lottos.push(new Lotto(numbers));
    }
  }

  printCount() {
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      lotto.printLotto();
    });
  }

  createRanks(winningNumbers, bonusNum) {
    this.lottos.forEach((lotto) => {
      this.ranks.push(lotto.getRank(winningNumbers, bonusNum));
    });
  }

  printResult(winningNumber, bonusNum) {
    this.createRanks(winningNumber, bonusNum);
    this.ranks = this.ranks.filter((rank) => rank !== 0);

    const map = this.ranks.reduce((accu, curr) => {
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

    for (let rank = 5; rank >= 1; rank--) {
      MissionUtils.Console.print(
        `${statisticsMsg[rank - 1]} ${map.has(rank) ? map.get(rank) : 0}개`
      );
    }
  }
}

module.exports = Lottos;
