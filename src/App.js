const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const PrintInfo = require('./PrintInfo');
const {
  PRIZE_MONEY,
  MIN_NUMBER,
  MAX_NUMBER,
  LOTTO_COUNT,
  MONEY_UNIT,
} = require('./constants');
const ErrorInfo = require('./ErrorInfo');

const printInfo = new PrintInfo();
const checkError = new ErrorInfo();
class App {
  constructor() {
    this.prizeSum = 0;
    this.winResult = [0, 0, 0, 0, 0];
    this.userLottoArray = [];
    this.bonusNumber = 0;
    this.winningLotto;
    this.userCost = 0;
    this.rateOfReturn = 0.0;
  }

  play() {
    printInfo.requestUserMoneyInput();
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
    checkError.inputMoneyError(isValidMoney);
    this.userCost = userMoneyInput;

    const lotteryQuantity = this.countLotteries(this.userCost);
    printInfo.printLotteryQuantity(lotteryQuantity);
    this.issueLotteries(lotteryQuantity);
  }

  isValidMoney(userMoneyInput) {
    if (
      userMoneyInput < MONEY_UNIT ||
      Number.isNaN(userMoneyInput) ||
      userMoneyInput % MONEY_UNIT !== 0
    ) {
      return false;
    }
    return true;
  }

  countLotteries(userMoneyInput) {
    const lotteryQunatity = userMoneyInput / MONEY_UNIT;

    return lotteryQunatity;
  }

  issueLotteries(lotteryQuantity) {
    this.userLottoArray = this.pickRandomLotteries(lotteryQuantity);
    this.userLottoArray.forEach((oneLottery) => {
      const lottoNumbers = oneLottery.join(', ');
      printInfo.printLottoNumbers(lottoNumbers);
    });
  }

  pickRandomLotteries(lotteryQuantity) {
    const userLottoArray = [];
    for (let cnt = 1; cnt <= lotteryQuantity; cnt += 1) {
      const oneLottery = Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        LOTTO_COUNT,
      );
      oneLottery.sort((a, b) => a - b);
      const userLotto = new Lotto(oneLottery);
      userLottoArray.push(userLotto.getNumbers());
    }
    return userLottoArray;
  }

  inputWinningLotto() {
    printInfo.requestWinningLotto();
    Console.readLine('', (winningNumber) => {
      const winningNumberArray = winningNumber
        .split(',')
        .map((number) => parseInt(number, 10));
      this.winningLotto = new Lotto(winningNumberArray);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    printInfo.requestBonusNumber();
    Console.readLine('', (bonusNumber) => {
      const inputBonusNumber = parseInt(bonusNumber, 10);
      checkError.bonusNumberError(inputBonusNumber, this.winningLotto);
      this.bonusNumber = bonusNumber;
      this.lotteryDraw();
    });
  }

  lotteryDraw() {
    printInfo.printPrizeResult();
    this.checkLottoNumber();
  }

  checkLottoNumber() {
    const winningLotto = this.winningLotto.getNumbers();
    this.userLottoArray.forEach((oneLotto) => {
      const sameNumbercount = this.sameNumberCheck(oneLotto, winningLotto);
      this.checkWinResult(oneLotto, sameNumbercount);
    });
    this.printWinResult();
  }

  sameNumberCheck(oneLotto, winningLotto) {
    let sameNumbercount = 0;
    oneLotto.forEach((number) => {
      if (winningLotto.includes(number)) {
        sameNumbercount += 1;
      }
    });
    return sameNumbercount;
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
        oneLotto.includes(this.bonusNumber)
          ? (this.winResult[3] += 1)
          : (this.winResult[2] += 1);
        break;
      case 6:
        this.winResult[4] += 1;
        break;
      default:
    }
  }

  printWinResult() {
    this.winResult.forEach((element, idx) => {
      printInfo.printWinResult(idx, element);
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
    printInfo.printRateOfReturn(rateOfReturnString);
  }

  exitLottoGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
