const { Console } = require('@woowacourse/mission-utils');
const {
  MESSAGES,
  MATCHING_MESSAGES,
  PRIZE_MESSAGES,
} = require('./constant/messages');
const Purchaser = require('./domain/Purchaser');
const Validator = require('./validator');

class App {
  #winnerNumber;

  #bonusNumber;

  #lottos;

  constructor() {
    this.validator = new Validator();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT, (money) => {
      this.validator.validateInput(money);
      this.purchaser = new Purchaser(money);
      this.#lottos = this.purchaser.buyLotto(money / 1000);
      this.showLottoNumber();
      this.inputWinnerNumber();
    });
  }

  showLottoNumber() {
    Console.print(`${this.#lottos.length}${MESSAGES.BUY_LOTTO}`);
    this.#lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
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
      this.showResult();
      Console.close();
    });
  }

  showResult() {
    const matchedCountList = this.purchaser.countMatchedNumber(
      this.#lottos,
      this.#winnerNumber,
      this.#bonusNumber
    );
    this.showMatchedNumber(matchedCountList);
    this.showReturnRate(matchedCountList);
  }

  showMatchedNumber(list) {
    Object.keys(MATCHING_MESSAGES).forEach((matched, idx) => {
      Console.print(
        `${MATCHING_MESSAGES[matched]} ${PRIZE_MESSAGES[matched]} - ${
          list[idx + 3]
        }개`
      );
    });
  }

  showReturnRate(matchedCountList) {
    const money = this.purchaser.getInputMoney();
    const revenue = this.purchaser.getRevenue(matchedCountList);
    Console.print(
      `총 수익률은 ${this.purchaser.getReturnRate(money, revenue)}%입니다.`
    );
  }
}

const app = new App();
app.play();

module.exports = App;
