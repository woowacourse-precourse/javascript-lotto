const { Random } = require('@woowacourse/mission-utils');

class LottoRandomNum {
  getQuantity(amount) {
    return amount / 1000;
  }

  getLottoNum(amount) {
    let result = {
      lottoQuantity: 0,
      lottoNums: [],
    };
    let count = 0;

    result.lottoQuantity = this.getQuantity(amount);
    while (count < result.lottoQuantity) {
      result.lottoNums.push(Random.pickUniqueNumbersInRange(1, 45, 6));
      count++;
    }

    return result;
  }
}

module.exports = LottoRandomNum;
