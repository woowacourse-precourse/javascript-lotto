const { Console } = require('@woowacourse/mission-utils');

const { Lotto } = require('./models/Lotto');
const { createRandomNumbers } = require('../utils/createRandomNumbers');

class LotteryMachine {
  #winningLotto;
  #randomLottos = [];

  setLottos(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }
  setBonus(number) {
    this.#winningLotto.setBonus(number);
  }

  createRandomLottos(count) {
    for (let index = 0; index < count; index++) {
      const randomLotto = createRandomNumbers();
      this.#randomLottos.push(randomLotto);
      Console.print(`[${randomLotto.join(', ')}]`);
    }
  }
}

module.exports = LotteryMachine;
