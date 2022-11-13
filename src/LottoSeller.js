const { Random } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const Lotto = require('./Lotto');

class LottoSeller {
  #lottoPrice;

  constructor() {
    this.#lottoPrice = 1000;
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

  #validateInputMoney(money) {
    if (money % this.#lottoPrice !== 0) throw new Error(Messages.ZERO_REST);
  }

  getLottos() {
    return this.lottoArray;
  }
}

module.exports = LottoSeller;
