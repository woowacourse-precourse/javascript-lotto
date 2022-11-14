const { Console, Random, Validation } = require('./util');
const { CONSTANTS } = require('./constants');
class Machine {
  #insertedMoney;

  constructor(money) {
    this.validate(money);
    this.#insertedMoney = money;
  }

  get insertedMoney() {
    return this.#insertedMoney;
  }

  insertMoney(money) {
    const bills = money / 1000;
    Console.print(`\n${bills}개를 구매했습니다.`);
    return this.generateLottery(bills);
  }

  generateLottery(bills) {
    const { BEGIN, END, MAX, ZERO } = CONSTANTS;
    const newLotto = [];
    for (let index = ZERO; index < bills; index++) {
      const lotto = Random.pickUniqueNumbersInRange(BEGIN, MAX, END)
        .sort((pre, next) => (pre - next));
      newLotto.push(lotto);
      Console.print(`[${lotto.join(', ')}]`);
    }
    return newLotto;
  }

  validate(money) {
    return Validation.isRightMoney(Number(money));
  }
}

module.exports = Machine;
