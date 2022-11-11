const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  static issueLotto(numberCount = 6, minNumber = 1, maxNumber = 45) {
    const lotto = [];

    while (lotto.length < numberCount) {
      const pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);

      if (!lotto.includes(pickedNumber)) {
        lotto.push(pickedNumber);
      }
    }

    return lotto;
  }
}

module.exports = LottoGenerator;
