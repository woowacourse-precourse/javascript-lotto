/* eslint-disable no-empty-function */
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';
const USER_MONEY_INPUT_ERROR = '[ERROR] 구입금액이 올바르지 않습니다.';
const LOTTO_QUANTITY_OUTPUT = '개를 구매했습니다.';
class App {
  // eslint-disable-next-line no-useless-constructor
  lotteryQuantity = 0;

  lotteryArray = [];

  winningNumber = [];

  userLottoArray = [];

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
      MissionUtils.Console.print(
        `\n${this.lotteryQuantity}${LOTTO_QUANTITY_OUTPUT}`,
      );
      this.userLottoArray = this.issueLotteries(this.lotteryQuantity);
      this.userLottoArray.forEach((oneLottery) => {
        MissionUtils.Console.print(oneLottery.getNumbers());
      });
      const winningLotto = this.inputWinningLotto();
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

  issueLotteries(lotteryQuantity) {
    for (let cnt = 1; cnt <= lotteryQuantity; cnt += 1) {
      const oneLottery = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      oneLottery.sort((a, b) => a - b);
      const userLotto = new Lotto(oneLottery);
      this.userLottoArray.push(userLotto);
    }
    return this.userLottoArray;
  }

  inputWinningLotto() {
    MissionUtils.Console.print('당첨 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (winningNumber) => {
      const winningNumberArray = winningNumber
        .split(',')
        .map((number) => parseInt(number, 10));
      const winningLotto = this.makeWinningLotto(winningNumberArray);
      return winningLotto;
    });
  }

  makeWinningLotto(winningNumberArray) {
    const winningLotto = new Lotto(winningNumberArray);
    return winningLotto;
  }
}

const app = new App();
app.play();

module.exports = App;
