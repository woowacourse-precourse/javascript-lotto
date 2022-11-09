const MissionUtils = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.inputMoney = 0;
    this.amountLotto = 0;
  }

  play() {
    this.userInput(PROMPT_MONEY);
  }

  userInput(prompt) {
    MissionUtils.Console.readLine(`${prompt}\n`, (input) => {
      this.inputMoney = input;
      this.countLotto(this.inputMoney);
    });
  }

  printSentence(sentence) {
    MissionUtils.Console.print(sentence);
  }

  countLotto(money) {
    const amountLotto = money / LOTTO_PRICE;
    this.amountLotto = amountLotto;
    this.printSentence(`\n${this.amountLotto}개를 구매했습니다.`);
  }
}

let app = new App();
app.play();

module.exports = App;
