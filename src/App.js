/* eslint-disable no-empty-function */
const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';
const USER_MONEY_INPUT_ERROR = '[ERROR] 구입금액이 올바르지 않습니다.';
const LOTTO_QUANTITY_OUTPUT = '개를 구매했습니다.';
const WINNING_LOTTO_REQUEST = '\n당첨 번호를 입력해 주세요.';
const BONUS_NUMBER_REQUEST = '\n보너스 번호를 입력해 주세요.';
const PRINT_STRING = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
];
const PRIZE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];

class App {
  // eslint-disable-next-line no-useless-constructor
  // lotteryQuantity = 0;

  prizeSum = 0;

  winResult = [0, 0, 0, 0, 0];

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
      this.inputBonusNumber();
    });
  }

  makeLottoInstance(numberArray) {
    const lotto = new Lotto(numberArray);
    return lotto;
  }

  inputBonusNumber() {
    Console.print(BONUS_NUMBER_REQUEST);
    Console.readLine('', (bonusNumber) => {
      const inputBonusNumber = parseInt(bonusNumber, 10);
      if (!this.isValidNumber(inputBonusNumber)) {
        throw new Error('[ERROR] 유효한 번호가 아닙니다.');
      }
      this.bonusNumber = bonusNumber;
      this.lotteryDraw();
    });
  }

  isValidNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45 || !Number(bonusNumber)) {
      return false;
    }
    return true;
  }

  lotteryDraw() {
    Console.print('\n당첨 통계\n---');
    this.checkLottoNumber();
  }

  checkLottoNumber() {
    const winningLotto = this.winningLotto.getNumbers();
    this.userLottoArray.forEach((oneLotto) => {
      let count = 0;
      oneLotto.forEach((number) => {
        if (winningLotto.includes(number)) {
          count += 1;
        }
      });
      this.checkWinResult(oneLotto, count);
    });
    this.printWinResult();
  }

  checkWinResult(oneLotto, count) {
    switch (count) {
      case 3:
        this.winResult[0] += 1;
        break;
      case 4:
        this.winResult[1] += 1;
        break;
      case 5:
        if (oneLotto.includes(this.bonusNumber)) {
          this.winResult[3] += 1;
        } else this.winResult[2] += 1;
        break;
      case 6:
        this.winResult[4] += 1;
        break;
      default:
    }
  }

  printWinResult() {
    this.winResult.forEach((element, idx) => {
      Console.print(`${PRINT_STRING[idx]}${element}개`);
    });
    this.getRateOfReturn();
    this.exitLottoGame();
  }

  getRateOfReturn() {
    this.winResult.forEach((element, idx) => {
      this.prizeSum += element * PRIZE_MONEY[idx];
    });
    this.rateOfReturn = ((this.prizeSum / this.userCost) * 100).toFixed(1);
    const rateOfReturnString = this.rateOfReturn
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    Console.print(`총 수익률은 ${rateOfReturnString}%입니다.`);
  }

  exitLottoGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
