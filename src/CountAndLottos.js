const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class CountAndLottos {
  constructor() {
    this.lotto = new Lotto();
    this.lottoArray = [];
  }

  countBuying(money) {
    const NUMBER = money / 1000;
    Console.print(`\n${NUMBER}개를 구매했습니다.`);
  }

  printLottos(money) {
    const NUMBER = money / 1000;

    for (let count = 1; count <= NUMBER; count++) {
      let uniqueNumberInRange = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Console.print(`[${uniqueNumberInRange.join(', ')}]`);
      this.lotto.validate(uniqueNumberInRange);
      this.lottoArray.push(uniqueNumberInRange);
    }
  }

  getLottos() {
    return this.lottoArray;
  }
}

module.exports = CountAndLottos;
