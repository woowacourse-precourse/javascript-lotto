const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('./constants/lotto');

class LottoSales {
  static issueLotto(money) {
    const count = money / 1_000;
    const lotto = new Array(count).fill(0).map(() => LottoSales.pickNumbers());

    return lotto;
  }

  static pickNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(RULE.RANGE_START, RULE.RANGE_END, RULE.LENGTH);
    return numbers.sort((prev, cur) => prev - cur);
  }
}

module.exports = LottoSales;
