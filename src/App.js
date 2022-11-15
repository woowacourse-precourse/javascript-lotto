const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const MyLotto = require('./MyLotto');
const {
  PURCHASE_PRICE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
} = require('./constants/constants');

class App {
  constructor() {
    this.lotto = 0;
    this.myLotto = 0;
    this.bonus = 0;
  }

  play() {
    Console.readLine(PURCHASE_PRICE_MESSAGE, (answer) => this.start(answer));
  }

  start(answer) {
    this.myLotto = new MyLotto(answer);
    this.myLotto.purchase();
    this.myLotto.print();

    Console.readLine(WINNING_NUMBER_MESSAGE, (answer) => this.input(answer));
  }

  input(answer) {
    const numbers = answer.split(',').map(Number);
    const myLotto = this.myLotto.myLotto;

    this.lotto = new Lotto(numbers);
    this.lotto.inputBonus(myLotto);
  }
}

module.exports = App;
