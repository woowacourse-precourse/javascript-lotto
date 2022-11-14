const MissionUtils = require("@woowacourse/mission-utils");

const MissionUtils = require("@woowacourse/mission-utils");

const PURCHASE_MONEY = '구입금액을 입력해 주세요.';
const PRICE_LOTTO = 1000;

class App {
  constructor() {
    this.lottoArray = [];
  }

  play() {
    this.userInput(PURCHASE_MONEY);
  }

  userWindow(window) {
   MissionUtils.Console.readLine(`${window}\n`, (input) => {
    this.lottoCount(input);
   });
  }

  lottoCount(money) {
    const lottoAmount = money / PRICE_LOTTO;
    MissionUtils.Console.print(`\n${lottoAmount}개를 구매했습니다.`);
    this.lottoCreate(lottoAmount);
  }

  lottoCreate(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(numbers);
    }
  }
}

new App().play();

module.exports = App;
