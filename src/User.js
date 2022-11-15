/* eslint-disable prettier/prettier */
const { Console } = require('@woowacourse/mission-utils');

const {
  THREE_MATCH, FOUR_MATCH, FIVE_MATCH, FIVE_BONUS_MATCH, SIX_MATCH
} = require('./constants/scores');

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
    Console.print(`${THREE_MATCH} - ${this.three}개`);
    Console.print(`${FOUR_MATCH} - ${this.four}개`);
    Console.print(`${FIVE_MATCH} - ${this.five}개`);
    Console.print(
      `${FIVE_BONUS_MATCH} - ${this.fiveBonus}개`
    );
    Console.print(`${SIX_MATCH} - ${this.six}개`);
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
