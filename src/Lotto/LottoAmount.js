const { prizeCount, PRIZE_MONEY, OUTPUT, NUMBER } = require('../common/constants');
const { print, random } = require('../common/util');
const { checkLottoAmount } = require('../common/Validation');

class LottoAmount {
  #lottoAmount;

  constructor(money) {
    checkLottoAmount(money);
    this.#lottoAmount = money / NUMBER.THOUSAND_WON;
    print(OUTPUT.PURCHASED_AMONUT(this.#lottoAmount));
  }

  publishUserLotto() {
    const publishedUserLotto = [];

    for (let index = 0; index < this.#lottoAmount; index++) {
      let eachUserLottoNumber = random();
      publishedUserLotto.push(eachUserLottoNumber);
      print(`[${eachUserLottoNumber.join(', ')}]`);
    }
    return publishedUserLotto;
  }

  calculateProfit() {
    const inputMoney = this.#lottoAmount * NUMBER.THOUSAND_WON;
    const outpuMoney = Object.values(prizeCount).reduce(
      (accumulator, currentValue, index) => currentValue * PRIZE_MONEY[index] + accumulator,
      NUMBER.INITIAL_VALUE
    );
    return ((outpuMoney / inputMoney) * NUMBER.ONE_HUNDRED).toFixed(1);
  }
}

module.exports = LottoAmount;
