const { prizeCount, PRIZE_MONEY } = require('./constants');
const { print, random } = require('./util');
const { checkLottoAmount } = require('./validation');

class LottoGenerator {
  #lottoAmount;

  constructor(money) {
    checkLottoAmount(money);
    this.#lottoAmount = money / 1000;
    print(`${this.#lottoAmount}개를 구매했습니다.`);
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
    const inputMoney = this.#lottoAmount * 1000;
    const outpuMoney = Object.values(prizeCount).reduce(
      (accumulator, currentValue, index) => currentValue * PRIZE_MONEY[index] + accumulator,
      0
    );
    return ((outpuMoney / inputMoney) * 100).toFixed(1);
  }
}

module.exports = LottoGenerator;
