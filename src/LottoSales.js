const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('./constants/lotto');

class LottoSales {
  static issueLotto() {
    const numbers = Random.pickUniqueNumbersInRange(RULE.RANGE_START, RULE.RANGE_END, RULE.LENGTH);
    return numbers.sort((prev, cur) => prev - cur);
  }
}

module.exports = LottoSales;
