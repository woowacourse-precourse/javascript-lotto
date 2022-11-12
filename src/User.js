/* eslint-disable prettier/prettier */
const { Console } = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.money = 0;
    this.lottos = [];
    this.three = 0;
    this.four = 0;
    this.five = 0;
    this.fiveBonus = 0;
    this.six = 0;
    this.profit = 0;
  }

  getLottos() {
    return this.lottos;
  }

  getScore() {
    Console.print(`3개 일치 (5,000원) - ${this.three}개`);
    Console.print(`4개 일치 (50,000원) - ${this.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.five}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveBonus}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.six}개`);
  }

  setProfit() {
    this.profit = this.three * 5000
      + this.four * 50000
      + this.five * 1500000
      + this.fiveBonus * 30000000
      + this.six * 2000000000;
  }

  getProfit() {
    const profit = ((this.profit / this.money) * 100).toFixed(1);
    return Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = User;
