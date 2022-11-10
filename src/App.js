const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  play() {
    this.calculateMoney();
  }

  calculateMoney() {
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const LOTTO_PAPER = userInput / 1000;

      if (userInput % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 구입해 주세요.');
      }

      return this.UserLottoNumber(LOTTO_PAPER);
    });
  }

  UserLottoNumber(amount) {
    const USER_LOTTO_ARRAY = [];

    MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);

    for (let number = 0; number < amount; number++) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(NUMBERS.sort((a, b) => a - b));
      USER_LOTTO_ARRAY.push(NUMBERS);
      number++;
    }

    this.winNumber();

    return USER_LOTTO_ARRAY;
  }

  winNumber() {
    let winNumberArray;

    MissionUtils.Console.print('\n당첨 번호를 쉼표로 구분하여 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      winNumberArray = userInput.split(',').map((item) => +item);
      const WIN_NUMBER = new Lotto(winNumberArray);
      WIN_NUMBER.duplicate();
      WIN_NUMBER.checkNumber();

      this.bonusNumber();
      return winNumberArray;
    });
  }

  bonusNumber() {
    MissionUtils.Console.print('\n보너스 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const BONUS_NUMBER = parseInt(userInput);
      if (BONUS_NUMBER < 1 || BONUS_NUMBER > 45 || Number.isNaN(BONUS_NUMBER)) {
        throw new Error('[ERROR] 보너스 숫자는 1 ~ 45 사이의 숫자를 입력해 주세요.');
      }
      return BONUS_NUMBER;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
