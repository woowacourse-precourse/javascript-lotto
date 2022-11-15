const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
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

  getLottos() {
    const winningNumbers = this.#winningLotto.numbers;
    const bonus = this.#winningLotto.bonus;

    return { randomLottos: this.#randomLottos, winningNumbers, bonus };
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
