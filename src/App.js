const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./constant/messages');
const Lotto = require('./Lotto');
const Validator = require('./validator');

class App {
  #winnerNumber;

  #bonusNumber;

  constructor() {
    this.validator = new Validator();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT, (money) => {
      this.validator.validateInput(money);
      this.processLottoPurchase(money);
      this.inputWinnerNumber();
    });
  }

  processLottoPurchase(number) {
    const lottos = this.buyLotto(number / 1000);
    this.showLotto(lottos);
  }

  buyLotto(number) {
    const tokens = this.createToken(number);
    const lottos = tokens.map((token) => new Lotto(token));
    return lottos;
  }

  showLotto(lottos) {
    Console.print(`${lottos.length}${MESSAGES.BUY_LOTTO}`);
    lottos.forEach((lotto) => Console.print(lotto.getNumbers()));
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createToken(number) {
    let count = 0;
    const tokens = [];
    while (count < number) {
      tokens.push(this.pickRandomNumbers().sort((a, b) => a - b));
      count += 1;
    }
    return tokens;
  }

  inputWinnerNumber() {
    Console.readLine(MESSAGES.INPUT_WINNER_NUMBER, (winnerNumber) => {
      this.#winnerNumber = winnerNumber
        .split(',')
        .map((number) => +number.trim());
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = +bonusNumber;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
