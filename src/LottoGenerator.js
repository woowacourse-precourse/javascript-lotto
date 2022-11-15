const { Random, Console } = require('@woowacourse/mission-utils');

class LottoNumberGenerator {
  constructor(number) {
    const quantity = number / 1000;
    this.number = quantity;
  }

  createLotto() {
    const lottos = [];
    for (let i = 0; i < this.number; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(numbers);
    }
    return lottos;
  }
}

module.exports = LottoNumberGenerator;
