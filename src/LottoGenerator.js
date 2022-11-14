const { print } = require('./util');

class LottoGenerator {
  constructor(money) {
    this.lottoAmount = money / 1000;
    print(`${this.lottoAmount}개를 구매했습니다.`);
  }
}

module.exports = LottoGenerator;
