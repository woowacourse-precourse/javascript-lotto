const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  play() {
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    this.buyLotto();
  }

  buyLotto() {
    let amount;

    MissionUtils.Console.readLine('', (userInput) => {
      const PAID_MONEY = userInput.split('').map((item) => +item);
      const LOTTO_PRICE = 1000;

      if (PAID_MONEY.includes(NaN)) {
        throw new Error('[ERROR] 구입하실 금액은 숫자로 입력하셔야 합니다.');
      }
      if (userInput % LOTTO_PRICE !== 0 || userInput <= 0) {
        throw new Error('[ERROR] 로또는 1000원 단위로 구입하셔야 합니다.');
      }

      amount = userInput / LOTTO_PRICE;
      this.printLottoNumber(amount, userInput);
    });
  }

  printLottoNumber(amount, investment) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    const LOTTO_NUMBER_ARRAY = [];

    for (let number = 0; number < amount; number++) {
      const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      LOTTO_NUMBER_ARRAY.push(LOTTO_NUMBER);
      MissionUtils.Console.print(`[${LOTTO_NUMBER.sort((a, b) => a - b).join(', ')}]`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
