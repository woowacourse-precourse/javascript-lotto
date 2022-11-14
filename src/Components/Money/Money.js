const { Console } = require('@woowacourse/mission-utils');

class Money {
  #money;

  constructor(money = 0) {
    this.#money = money;
  }

  multiply(count) {
    return new Money(this.#money * count);
  }

  getMoney() {
    return this.#money;
  }

  addMoney(money) {
    this.#money += money.getMoney();
  }

  addSeperator() {
    return String(this.#money)
      .split('')
      .reverse()
      .reduce((strings, string, index) => {
        if (index > 0 && index % 3 === 0) strings.push(',');
        strings.push(string);

        return strings;
      }, [])
      .reverse()
      .join('');
  }

  printEarningRate(earning) {
    const earningRate = Number.parseFloat((earning.getMoney() / this.#money) * 100).toFixed(1);

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

module.exports = Money;
