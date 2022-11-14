const MissionUtils = require("@woowacourse/mission-utils");
const GenerateLottoNumbers = require("./GenerateRandomNumbers");
const Lotto = require("./Lotto");

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    this.generateLottoNumbers = new GenerateLottoNumbers();
    this.count = purchaseAmount / 1000;
    this.lottos = [];
    this.ranks = [];

    this.createLottos();
  }

  validate(money) {
    if (isNaN(Number(money))) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
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

    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${map.has(5) ? map.get(5) : 0}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${map.has(4) ? map.get(4) : 0}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${map.has(3) ? map.get(3) : 0}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        map.has(2) ? map.get(2) : 0
      }개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${map.has(1) ? map.get(1) : 0}개`
    );
  }
}

module.exports = Lottos;
