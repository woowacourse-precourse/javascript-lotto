/* eslint-disable no-empty-function */
const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';
const USER_MONEY_INPUT_ERROR = '[ERROR] 구입금액이 올바르지 않습니다.';
const LOTTO_QUANTITY_OUTPUT = '개를 구매했습니다.';
const WINNING_LOTTO_REQUEST = '\n당첨 번호를 입력해 주세요.';

class App {
  // eslint-disable-next-line no-useless-constructor
  // lotteryQuantity = 0;

  prizeSum = 0;

  winResult = [];

  userLottoArray = [];

  bonusNumber = 0;

  winningLotto;

  userCost = 0;

  rateOfReturn = 0.0;

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  play() {
    Console.print(USER_MONEY_INPUT_REQUEST);
    this.startLotto();
  }

  startLotto() {
    Console.readLine('', (userMoneyInput) => {
      this.buyLottery(userMoneyInput);
      this.inputWinningLotto();
    });
  }

  buyLottery(userMoneyInput) {
    const isValidMoney = this.isValidMoney(userMoneyInput);
    if (!isValidMoney) {
      throw new Error(USER_MONEY_INPUT_ERROR);
    }
    this.userCost = userMoneyInput;
    const lotteryQuantity = this.countLotteries(this.userCost);
    Console.print(`\n${lotteryQuantity}${LOTTO_QUANTITY_OUTPUT}`);
    this.issueLotteries(lotteryQuantity);
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
    this.userLottoArray = this.pickRandomLotteries(lotteryQuantity);
    this.userLottoArray.forEach((oneLottery) => {
      const lottoNumbers = oneLottery.join(', ');
      Console.print(`[${lottoNumbers}]`);
    });
  }

  pickRandomLotteries(lotteryQuantity) {
    const userLottoArray = [];
    for (let cnt = 1; cnt <= lotteryQuantity; cnt += 1) {
      const oneLottery = Random.pickUniqueNumbersInRange(1, 45, 6);
      oneLottery.sort((a, b) => a - b);
      const userLotto = this.makeLottoInstance(oneLottery);
      userLottoArray.push(userLotto.getNumbers());
    }
    return userLottoArray;
  }

  inputWinningLotto() {
    Console.print(WINNING_LOTTO_REQUEST);
    Console.readLine('', (winningNumber) => {
      const winningNumberArray = winningNumber
        .split(',')
        .map((number) => parseInt(number, 10));
      this.winningLotto = this.makeLottoInstance(winningNumberArray);
    });
  }

  makeLottoInstance(numberArray) {
    const lotto = new Lotto(numberArray);
    return lotto;
  }
}

const app = new App();
app.play();

module.exports = App;
