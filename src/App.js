const MissionUtils = require("@woowacourse/mission-utils");

const MissionUtils = require("@woowacourse/mission-utils");

const PURCHASE_MONEY = '구입금액을 입력해 주세요.';
const PRICE_LOTTO = 1000;

class App {
  constructor() {
    this.moneyInput = 0;
    this.lottoAmount = 0;
  }

  play() {
    this.userInput(PURCHASE_MONEY);
  }

  userWindow(window) {
    MissionUtils.Console.readLine(`${window}\n`, (input) => {
      this.moneyInput = input;
      this.lottocount(this.moneyInput);
    });
  }

  printSentence(output) {
    MissionUtils.Console.print(output);
  }

  countLotto(money) {
    const lottoAmount = money / PRICE_LOTTO;
    this.lottoAmount = lottoAmount;
    this.printSentence(`\n${this.lottoAmount}개를 구매했습니다.`);
  }
}

new App().play();

module.exports = App;
