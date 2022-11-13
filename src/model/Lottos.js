const MissionUtils = require("@woowacourse/mission-utils");
const generateRandomNumber = require("./GenerateRandomNumber");
const Lotto = require("./Lotto");

class Lottos {
  constructor(purchaseAmount) {
    this.count = purchaseAmount / 1000;
    this.lottos = [];
    this.createLottos();
  }

  createLotto() {
    return generateRandomNumber.generate();
  }

  createLottos() {
    this.lottos.push(new Lotto(this.createLotto));
  }

  printCount() {
    MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      lotto.printLotto();
    });
  }
}

module.exports = Lottos;
