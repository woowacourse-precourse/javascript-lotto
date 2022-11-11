const { Random } = require('@woowacourse/mission-utils');

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;
const NUM_OF_LOTTO = 6;

class LottoGenerator {
  constructor(money) {
    this.isInputMoneyValid(money);
    this.money = money;
    this.numOfLottos = this.getNumOfLottos(money);
    this.lottos = this.generateLottos(this.numOfLottos);
  }

  isInputMoneyValid(money) {
    if (!money) {
      throw new Error('[ERROR] 구입 금액을 입력해야 합니다.');
    }
    if (!Number.isInteger(money)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (money < 0) {
      throw new Error('[ERROR] 금액은 0보다 커야 합니다.');
    }
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 천 원 단위로 입력해야 합니다.');
    }
  }

  getNumOfLottos(money) {
    const MIN_UNIT = 1000;
    return parseInt(money / MIN_UNIT);
  }

  generateLottos(numOfLottos) {
    console.log('개수', numOfLottos);
    let lottos = [];
    for (let i = 0; i < numOfLottos; i += 1) {
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
