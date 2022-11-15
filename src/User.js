const Lotto = require('./Lotto');
const { checkValidMoney } = require('./utils/validator');
const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');

class User {
  #money;
  #lottos;
  #results;
  #rateOfReturn;
  #revenue;

  constructor() {
    this.#results = new Array(8).fill(0);
    this.#revenue = 0;
  }

  buyLottos(money) {
    checkValidMoney(money);
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      let lottoNumber = this.pickNumber();
      return new Lotto(lottoNumber);
    });
    this.printLottos();
    return this.#lottos;
  }

  pickNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}${MESSAGE.OUTPUT.PURCHASE}`);
    this.#lottos.forEach((lotto) => lotto.printLotto());
  }

  checkLottos(winNumber, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      let rank = lotto.check(winNumber, bonusNumber);
      this.#results[rank - 1] += 1;
    });
  }

  printResult() {
    Console.print(`${MESSAGE.OUTPUT.RESULT.INFO}`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.RANK5}${this.#results[4]}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.RANK4}${this.#results[3]}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.RANK3}${this.#results[2]}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.RANK2}${this.#results[1]}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.RANK1}${this.#results[0]}개`);
    Console.print(
      `${MESSAGE.OUTPUT.RESULT.REVENUE}${this.#rateOfReturn}%입니다.`
    );
    Console.close();
  }

  checkRateOfReturn() {
    this.calculateRevenue();
    this.#rateOfReturn = ((this.#revenue / this.#money) * 100).toFixed(1);
    this.printResult();
    return this.#rateOfReturn;
  }

  calculateRevenue() {
    let reward = [2000000000, 30000000, 1500000, 50000, 5000, 0, 0, 0];
    this.#results.forEach((num, idx) => (this.#revenue += reward[idx] * num));
    return this.#revenue;
  }
}

module.exports = User;
