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
    Console.readLine(PURCHASE_PRICE_MESSAGE, this.start.bind(this));
  }

  start(answer) {
    this.myLotto = new MyLotto(answer);
    this.myLotto.purchase();
    this.myLotto.print();

    Console.readLine(WINNING_NUMBER_MESSAGE, this.input.bind(this));
  }

  input(answer) {
    const numbers = answer.split(',').map(Number);
    const myLotto = this.myLotto.myLotto;

    this.lotto = new Lotto(numbers);
    this.lotto.inputBonus(myLotto);
  }
}
const app = new App();
app.play();
module.exports = App;
