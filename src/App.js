const { Console, Random } = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const PROMPT_LOTTO = '당첨 번호를 입력해 주세요.';
const PROMPT_BONUS = '보너스 번호를 입력해 주세요.';
const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.arrayLotto = [];
    this.arrayWinLotto = 0;
    this.numberBonus = 0;
  }

  play() {
    this.moneyInput(PROMPT_MONEY);
  }

  moneyInput(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      this.countLotto(input);
    });
  }

  countLotto(money) {
    const amountLotto = money / LOTTO_PRICE;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(numbers);
      this.arrayLotto.push(numbers);
    }
    this.lottoInput(PROMPT_LOTTO);
  }

  lottoInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.arrayWinLotto = input.split(",");
      this.bonusInput(PROMPT_BONUS);
    });
  }

  bonusInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.numberBonus = input;
    });
  }
}

let app = new App();
app.play();

module.exports = App;
