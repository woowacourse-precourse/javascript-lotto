const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');

class LottoGameModel {
  constructor() {
    this.money;
    this.lottoCount;
    this.lottos = [];
  }

  buyLotto(money) {
    this.money = money;

    this.payMoney();
    this.generateLottos();
  }

  payMoney() {
    this.lottoCount = this.money / 1000;

    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }

  generateLottos() {
    for (let i = 0; i < this.lottoCount; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );

      this.lottos.push(new Lotto(lotto));
    }
  }
}

module.exports = LottoGameModel;
