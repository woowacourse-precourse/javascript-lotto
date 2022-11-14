const MissionUtils = require("@woowacourse/mission-utils");
const GenerateLottoNumbers = require("./GenerateRandomNumbers");
const Lotto = require("./Lotto");

class Lottos {
  constructor(purchaseAmount) {
    this.generateLottoNumbers = new GenerateLottoNumbers();
    this.count = purchaseAmount / 1000;
    this.lottos = [];
    this.ranks = [];

    this.createLottos();
  }

  createLotto() {
    const numbers = this.generateLottoNumbers.generate();

    return new Lotto(numbers);
  }

  createLottos() {
    for (let num = 0; num < this.count; num++) {
      this.lottos.push(this.createLotto());
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
  }
}

module.exports = Lottos;
