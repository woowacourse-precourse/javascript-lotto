const Lotto = require('./Lotto');
const { LOTTO } = require('./Message');
const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  static purchase(count) {
    return Array.from(Array(count), () =>
      new Lotto(this.makeLotto()).getLottoNumbers()
    );
  }

  static makeLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MINNUM,
      LOTTO.MAXNUM,
      LOTTO.COUNT
    );

    return numbers.sort((a, b) => a - b);
  }
}

module.exports = LottoGenerator;
