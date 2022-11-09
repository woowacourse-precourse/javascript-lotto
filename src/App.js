const MissionUtils = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.arrayLotto = [];
  }

  play() {
    this.userInput(PROMPT_MONEY);
  }

  userInput(prompt) {
    MissionUtils.Console.readLine(`${prompt}\n`, (input) => {
      this.countLotto(input);
    });
  }

  countLotto(money) {
    const amountLotto = money / LOTTO_PRICE;
    MissionUtils.Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.arrayLotto.push(numbers);
    }
  }
}

let app = new App();
app.play();

module.exports = App;
