const { Random } = require('@woowacourse/mission-utils');

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;
const NUM_OF_LOTTO = 6;

class LottoGenerator {
  constructor(numOfPurchasedLotto) {
    this.lottos = this.generateLottos(numOfPurchasedLotto);
  }

  generateLottos(numOfPurchasedLotto) {
    let lottos = [];
    for (let i = 0; i < numOfPurchasedLotto; i += 1) {
      const ONE_LOTTO_NUM = this.generateLottoNum();
      lottos.push(this.sortArr(ONE_LOTTO_NUM));
    }
    return lottos;
  }

  sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr;
  }

  generateLottoNum() {
    return Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUM,
      MAX_LOTTO_NUM,
      NUM_OF_LOTTO
    );
  }

  generateRandomNum() {
    return Random.pickNumberInRange(MIN_LOTTO_NUM, MAX_LOTTO_NUM);
  }
}

module.exports = LottoGenerator;
