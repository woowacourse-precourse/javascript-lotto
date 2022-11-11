const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  play() {
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    this.lottoAmount();
  }

  lottoAmount() {
    MissionUtils.Console.readLine('', (userInput) => {
      const PAID_MONEY = parseInt(userInput);
      const LOTTO_PRICE = 1000;
      let amount = 0;

      if (PAID_MONEY % LOTTO_PRICE !== 0 || PAID_MONEY === 0) {
        throw new Error('[ERROR] 구입금액은 1000원 단위로 입력하셔야 합니다.');
      }
      amount = PAID_MONEY / LOTTO_PRICE;
      this.printLottoNumber(amount);
    });
  }

  printLottoNumber(amount) {
    const LOTTO_NUMBER = [];
    MissionUtils.Console.print(`\n${amount}개를 구매하셨습니다.`);

    for (let number = 0; number < amount; number++) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(NUMBERS.sort((a, b) => a - b));
      LOTTO_NUMBER.push(NUMBERS);
    }
    this.winNumber();
    return LOTTO_NUMBER;
  }

  winNumber() {
    MissionUtils.Console.print('\n당첨번호를 쉼표로 구분하여 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const WIN_NUMBER_ARRAY = userInput.split(',').map((item) => +item);
      this.checkWinNumber(WIN_NUMBER_ARRAY);
    });
  }

  checkWinNumber(winNumberArray) {
    const NUMBER_ARRAY = new Lotto(winNumberArray);
    NUMBER_ARRAY.duplicate();
    NUMBER_ARRAY.checkNumber();

    return NUMBER_ARRAY;
  }
}

const app = new App();
app.play();

module.exports = App;
