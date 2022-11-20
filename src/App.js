const { Console, Random } = require('@woowacourse/mission-utils');
const {
  UNIT_OF_AMOUNT,
  VALID_LENGTH,
  VALID_MIN_NUM,
  VALID_MAX_NUM,
} = require('./constant/index');
const Lotto = require('./Lotto');
const { convertToNumber } = require('./util/convert');
const { validateUnitOfAmount, validateMinAmount } = require('./util/validate');

class App {
  #lotto;

  constructor() {
    this.#lotto = [];
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

      const quantutyOfLotto = this.getQuantityOfLotto(money);
      this.createLotto(quantutyOfLotto);
    });
  }

  validate(money) {
    validateUnitOfAmount(money);
    validateMinAmount(money);
  }

  getQuantityOfLotto(amount) {
    return Math.floor(amount / UNIT_OF_AMOUNT);
  }

  printMessage(message) {
    return Console.print(message);
  }

  createLotto(number) {
    this.printMessage(`${number}개를 구매했습니다.`);

    for (let i = 0; i < number; i++) {
      const generateLottoNumbers = Random.pickUniqueNumbersInRange(
        VALID_MIN_NUM,
        VALID_MAX_NUM,
        VALID_LENGTH
      );
      generateLottoNumbers.sort((a, b) => a - b);

      const playerLotto = new Lotto(generateLottoNumbers);
      this.printMessage(playerLotto.Lotto());
      this.#lotto.push(playerLotto.Lotto());
    }
  }
}

const app = new App();
app.play();

module.exports = App;
