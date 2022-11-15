const { Console } = require('@woowacourse/mission-utils');
const { BUY_MESSAGE } = require('./const');

const Utils = require('./Utils');
const Validations = require('./Validations');

class Purchase {
  constructor(money) {
    this.validate(money);
    this.money = money;
    this.totalLottoes = [];
  }

  validate(money) {
    Validations.isThousand(money);
  }

  print() {
    this.printMoney();
    this.printLottoArray();
  }

  printMoney() {
    const count = this.money / 1000;
    Console.print(`${count}${BUY_MESSAGE}`);
  }

  printLottoArray() {
    this.totalLottoes.forEach(lotto => {
      const stringArray = Utils.convertFromArrayToString(lotto);
      Console.print(stringArray);
    });
  }

  createLottoArray(money) {
    this.money = money;
    const count = money / 1000;
    for (let i = 0; i < count; i += 1) {
      const unorderedLotto = Utils.createRandomLotto();
      const lottoArray = Utils.sortAscent(unorderedLotto);
      this.totalLottoes.push(lottoArray);
    }
    return this.totalLottoes;
  }
}

module.exports = Purchase;
