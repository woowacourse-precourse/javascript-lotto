/* eslint-disable no-empty-function */
const MissionUtils = require('@woowacourse/mission-utils');

const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';
const USER_MONEY_INPUT_ERROR = '[ERROR] 구입금액이 올바르지 않습니다.';

class App {
  // eslint-disable-next-line no-useless-constructor
  lotteryQuantity = 0;

  constructor() {
    MissionUtils.Console.print(USER_MONEY_INPUT_REQUEST);
  }

  play() {
    MissionUtils.Console.readLine('', (userMoneyInput) => {
      const isValid = this.isValidMoney(userMoneyInput);
      if (!isValid) {
        throw new Error(USER_MONEY_INPUT_ERROR);
      }
      this.lotteryQuantity = this.countLotteries(userMoneyInput);
      MissionUtils.Console.print(`${this.lotteryQuantity}개를 구매했습니다.`);
    });
  }

  isValidMoney(userMoneyInput) {
    if (
      userMoneyInput < 1000 ||
      !Number(userMoneyInput) ||
      userMoneyInput % 1000 !== 0
    ) {
      return false;
    }
    return true;
  }

  countLotteries(userMoneyInput) {
    const lotteryQunatity = userMoneyInput / 1000;
    return lotteryQunatity;
  }
}

const app = new App();
app.play();

module.exports = App;
