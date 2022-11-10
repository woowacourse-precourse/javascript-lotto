const { LOTTO } = require('./constructor.js');
const { Random } = require("@woowacourse/mission-utils");

class App {
  createRandomLottoNumbers = () => {
    const randoms = Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
    return randoms.sort((num1, num2) => num1 - num2);
  }

  play() {}
}

module.exports = App;
