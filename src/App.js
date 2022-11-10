const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constant/messages');
const Lotto = require('./Lotto');
// const Lotto = require('./Lotto');

class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT, (money) => {
      this.validateInput(money);
      this.processLottoPurchase(money);
    });
  }

  validateInput(money) {
    this.validateInputMoney(money);
    this.validateInputMoneyUnit(money);
  }

  validateInputMoney(money) {
    const check = /^[0-9]+$/;
    if (!check.test(money))
      throw Error(ERROR_MESSAGES.INPUT_TYPE_MUST_BE_NUBMER);
  }

  validateInputMoneyUnit(money) {
    if (parseInt(money, 10) % 1000 !== 0)
      throw Error(ERROR_MESSAGES.MONEY_MUST_BE_DIVIDED_INTO_1000);
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  // 구매할 로또의 개수를 받으면 해당 개수만큼 로또를 배열로 리턴함
  buyLotto(number) {
    const tokens = this.createToken(number);
    const lottos = tokens.map((token) => new Lotto(token));
    return lottos;
  }

  showLotto(lottos) {
    Console.print(`${lottos.length}${MESSAGES.BUY_LOTTO}`);
    lottos.forEach((lotto) => Console.print(lotto.getNumbers()));
  }

  processLottoPurchase(number) {
    const lottos = this.buyLotto(number / 1000);
    this.showLotto(lottos);
  }

  // 정수값을 받으면 해당 수만큼의 토큰을 리턴함
  createToken(number) {
    let count = 0;
    const tokens = [];
    while (count < number) {
      tokens.push(this.pickRandomNumbers());
      count += 1;
    }
    return tokens;
  }
}

const app = new App();
app.play();

module.exports = App;
