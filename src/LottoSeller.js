const { Console, Random } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

class LottoSeller {
  constructor() {
    this.validation = new Validation();
    this.lottoNumbersList = [];
  }

  resultsForCountAndNumbers(money) {
    this.validation.purchaseAmount(money);

    const COUNT_LOTTO = money / 1000;
    Console.print(`\n${COUNT_LOTTO}개를 구매했습니다.`);
    for (let i = 0; i < COUNT_LOTTO; i++) {
      let randomNumberInRange = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Console.print(`[${randomNumberInRange.join(', ')}]`);
      this.lottoNumbersList.push(randomNumberInRange);
    }
  }
}

module.exports = LottoSeller;
