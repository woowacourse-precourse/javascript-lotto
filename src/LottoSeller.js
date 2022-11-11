const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoSeller {
  constructor() {
    this.lotto = new Lotto();
    this.lottoNumbersList = [];
  }

  countBuying(money) {
    const COUNT_LOTTO = money / 1000;
    Console.print(`\n${COUNT_LOTTO}개를 구매했습니다.`);
  }

  printLottos(money) {
    const COUNT_LOTTO = money / 1000;

    for (let count = 1; count <= COUNT_LOTTO; count++) {
      let randomNumberInRange = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Console.print(`[${randomNumberInRange.join(', ')}]`);
      this.lotto.validate(randomNumberInRange);
      this.lottoNumbersList.push(randomNumberInRange);
    }
  }
}

module.exports = LottoSeller;
