const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}

  calculateMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userInput) => {
      const LOTTO_PAPER = userInput / 1000;

      if (userInput % 1000 !== 0) {
        throw new Error('[ERROR] 1000원 단위로 구매해 주세요.');
      }

      return LOTTO_PAPER;
    });
  }
}

module.exports = App;
