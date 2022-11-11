const { Console } = require('@woowacourse/mission-utils');
const {
  MESSAGES,
  MATCHING_MESSAGES,
  PRIZE_MESSAGES,
} = require('./constant/messages');
const Purchaser = require('./domain/Purchaser');
// const Purchaser = require('./domain/Purchaser');
const Validator = require('./validator');

class App {
  #money;

  #winnerNumber;

  #bonusNumber;

  #lottos;

  constructor() {
    this.validator = new Validator();
  }

  play() {
    this.inputMoney();
  }

  // UI
  inputMoney() {
    Console.readLine(MESSAGES.INPUT, (money) => {
      this.validator.validateInput(money);
      this.purchaser = new Purchaser(money);
      this.#lottos = this.purchaser.buyLotto(money / 1000);
      this.showLotto();
      this.inputWinnerNumber();
    });
  }

  // UI
  showLotto() {
    Console.print(`${this.#lottos.length}${MESSAGES.BUY_LOTTO}`);
    this.#lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  // UI
  inputWinnerNumber() {
    Console.readLine(MESSAGES.INPUT_WINNER_NUMBER, (winnerNumber) => {
      this.#winnerNumber = winnerNumber
        .split(',')
        .map((number) => +number.trim());
      this.inputBonusNumber();
    });
  }

  // UI
  inputBonusNumber() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.#bonusNumber = +bonusNumber;
      this.showResult();
      Console.close();
    });
  }
  // 당첨 내역을 출력한다
  // 로또 번호와 당첨번호 + 보너스번호가 몇개나 일치하는지 검사
  // 일치하는 수에 해당하는 배열 인덱스에 접근해서 해당 값을 ++
  // 그 배열 정보를 가지고 당첨 내역 출력

  // UI
  showResult() {
    const matchedCount = this.purchaser.countMatchedNumber(
      this.#lottos,
      this.#winnerNumber,
      this.#bonusNumber
    );
    this.showSameNumber(matchedCount);
    this.showReturnRate(matchedCount);
    console.log('same', matchedCount);
  }

  // UI
  showSameNumber(list) {
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
