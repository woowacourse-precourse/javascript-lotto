const { Console, Random } = require('@woowacourse/mission-utils');
const {
  UNIT_OF_AMOUNT,
  VALID_LENGTH,
  VALID_MIN_NUM,
  VALID_MAX_NUM,
} = require('./constant/index');
const Lotto = require('./Lotto');
const { convertToNumber, convertToNumberArray } = require('./util/convert');
const { validateUnitOfAmount, validateMinAmount } = require('./util/validate');

class App {
  #quantutyOfLotto;

  constructor() {
    this.randomNumbersArray = [];
    this.lotto;
    this.#quantutyOfLotto;
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.insertMoney();
  }

  insertMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const money = convertToNumber(answer);

      this.validate(money);
      this.#quantutyOfLotto = this.getQuantityOfLotto(money);
    });
  }

  validate(money) {
    validateUnitOfAmount(money);
    validateMinAmount(money);
  }

  getQuantityOfLotto(amount) {
    return Math.floor(amount / UNIT_OF_AMOUNT);
  }
}

const app = new App();
app.play();

module.exports = App;
