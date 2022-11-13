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
    this.winNumber(LOTTO_NUMBER_ARRAY, investment);
  }

  winNumber(lottoNumber, investment) {
    MissionUtils.Console.print('\n당첨 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const WIN_NUMBER = userInput.split(',').map((item) => +item);
      const LOTTO_ARRAY = lottoNumber;
      new Lotto(WIN_NUMBER);
      this.bonusNumber(WIN_NUMBER, LOTTO_ARRAY, investment);
    });
  }

  bonusNumber(winNumber, lottoNumber, investment) {
    MissionUtils.Console.print('\n보너스 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const BONUS_NUMBER = parseInt(userInput);
      if (Number.isNaN(BONUS_NUMBER)) {
        throw new Error('[ERROR] 보너스 번호는 숫자만 입력하셔야 합니다.');
      }
      if (winNumber.includes(BONUS_NUMBER)) {
        throw new Error('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.');
      }
      if (BONUS_NUMBER < 1 || BONUS_NUMBER > 45) {
        throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자를 입력 하셔야 합니다.');
      }
      const LOTTO_NUMBER_ARRAY = lottoNumber;
      const WIN_NUMBER_ARRAY = winNumber;
      const BONUS_NUMBER_ARRAY = [BONUS_NUMBER];
    });
  }
}

const app = new App();
app.play();

module.exports = App;
