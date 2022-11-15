const { print, random } = require('./util');
const { checkLottoAmount } = require('./validation');

class LottoGenerator {
  #lottoAmount;

  constructor(money) {
    checkLottoAmount(money);
    this.#lottoAmount = money / 1000;
    print(`${this.#lottoAmount}개를 구매했습니다.`);
    this.publishUserLotto();
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
}

module.exports = LottoGenerator;
