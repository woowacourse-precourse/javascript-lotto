const { Console } = require('@woowacourse/mission-utils');

class Money {
  #amount;

  constructor(amount = 0) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (isNaN(amount))
      throw new Error('[ERROR] Money 클래스는 number 타입 값으로 초기화해야 합니다.');
  }

  multiply(count) {
    return new Money(this.#amount * count);
  }

  divide(money) {
    return Math.trunc(this.#amount / money.getAmount());
  }

  getAmount() {
    return this.#amount;
  }

  addMoney(money) {
    this.#amount += money.getAmount();
  }

  addSeperator() {
    return String(this.#amount)
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

  calculateEarningRate(earning) {
    return Number.parseFloat((earning.getAmount() / this.#amount) * 100).toFixed(1) + '%';
  }
}

module.exports = Money;
