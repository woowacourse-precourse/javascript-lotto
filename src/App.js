const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  lottoAmount;
  winningLotteryNumbers;
  bonusNumber;

  play() {}

  getPurchasePrice() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
      if (parseInt(price) % 1000 !== 0) {
        throw new Error(
          '[ERROR] 구입 금액은 1,000원 단위로 입력하셔야 합니다.',
        );
      }
      this.lottoAmount = parseInt(price) / 1000;
    });
  }

  getWinningLotteryNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      this.winningLotteryNumbers = numbers;
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      this.bonusNumber = number;
    });
  }
}

module.exports = App;
