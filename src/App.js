const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.calculateMoney();
  }

  calculateMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userInput) => {
      const LOTTO_PAPER = userInput / 1000;

      if (userInput % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 구입해 주세요.');
      }

      return this.UserLottoNumber(LOTTO_PAPER);
    });
  }

  UserLottoNumber(amount) {
    let LOTTO_PAPER_NUMBER = amount;
    let number = 0;

    MissionUtils.Console.print(`\n${LOTTO_PAPER_NUMBER}개를 구매했습니다.`);

    while (number < LOTTO_PAPER_NUMBER) {
      const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(NUMBERS.sort((a, b) => a - b));
      number++;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
