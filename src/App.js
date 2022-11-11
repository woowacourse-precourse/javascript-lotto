/* eslint-disable no-empty-function */
const MissionUtils = require('@woowacourse/mission-utils');

const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';

class App {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    MissionUtils.Console.print(USER_MONEY_INPUT_REQUEST);
  }

  play() {
    MissionUtils.Console.readLine('', (userMoneyInput) => {
      const isValid = this.isValidMoney(userMoneyInput);
      MissionUtils.Console.print(isValid);
      this.play();
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

  // issueLotteries(userMoneyInput) {
  //   return lotteryQuantity;
  // }
}

const app = new App();
app.play();

module.exports = App;
