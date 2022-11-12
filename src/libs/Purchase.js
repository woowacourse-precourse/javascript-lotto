const { Console } = require('@woowacourse/mission-utils');
const { BUY_MESSAGE } = require('./const');

const Utils = require('./Utils');

class Purchase {
  static lottoes(money) {
    const total = [];
    const count = money / 1000;
    Console.print(`${count}${BUY_MESSAGE}`);
    for (let i = 0; i < count; i += 1) {
      const lottoArray = Utils.setLotto();
      const stringArray = Utils.convertFromArrayToString(lottoArray);
      Console.print(stringArray);
      total.push(lottoArray);
    }
    return total;
  }
}

module.exports = Purchase;
