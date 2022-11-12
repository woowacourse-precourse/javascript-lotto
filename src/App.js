const { Console } = require('@woowacourse/mission-utils');
const {
  APP_MESSAGE,
  EXCEPTION_MESSAGE,
  EXCEPTION_REASON,
  LOTTERY_PRIZE,
} = require('./constants/constants');
const Lotto = require('./Lotto');
const calculateProfit = require('./utils/calculateProfit');
const getLottoQuantity = require('./utils/getLotteryQuantity');
const isValidLottery = require('./utils/isValidLottery');
const makeRandomLottoNumber = require('./utils/makeRandomLottoNumber');

class App {
  #startMoney;
  #earnedMoney;
  #myLotteryQuantity;
  #myLotteryList;
  #winNumber;
  #bonusNumber;
  #myLotteryRankList;

  constructor() {
    this.#earnedMoney = 0;
    this.#myLotteryRankList = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  play() {
    return this.buy();
  }

  buy() {
    Console.readLine(APP_MESSAGE.INSERT_PURCHASE_COST, (userInput) => {
      this.#startMoney = Number(userInput);
      this.#myLotteryQuantity = getLottoQuantity(this.#startMoney);
      this.#myLotteryList = Array(this.#myLotteryQuantity).fill({}); // 처음부터 Array(Object) 모양 고정시켜 V8 Map Space에 불필요한 hiddenClass 생성을 막기 위함 (push 사용 x)
      return this.makeLotteries();
    });
  }

  makeLotteries() {
    this.#myLotteryList = this.#myLotteryList.map((blankObject) => {
      const myLottery = makeRandomLottoNumber();
      blankObject = new Lotto(myLottery);
      return blankObject;
    });
    return this.myLotteryResult();
  }

  myLotteryResult() {
    Console.print(APP_MESSAGE.PURCHASE_AMOUNT(this.#myLotteryQuantity));
    this.#myLotteryList.forEach((lottery) => {
      lottery.printMyLottery();
    });
    return this.makeWinNumber();
  }

  makeWinNumber() {
    Console.readLine(APP_MESSAGE.INSERT_WIN_NUMBER, (userInput) => {
      const answerLottery = userInput.split(',').map((separateInput) => {
        separateInput = Number(separateInput.trim());
        return separateInput;
      });

      const validCheck = isValidLottery(answerLottery);
      if (validCheck !== true) return this.makeException(validCheck);

      this.#winNumber = answerLottery;
      return this.makeBonusNumber();
    });
  }

  makeBonusNumber() {
    Console.readLine(APP_MESSAGE.INSERT_BONUS_NUMBER, (userInput) => {
      const inputBonusNumber = Number(userInput);
      if (this.#winNumber.includes(inputBonusNumber))
        return this.makeException(EXCEPTION_REASON.INPUT_OVERLAPPED);

      this.#bonusNumber = inputBonusNumber;
      return this.calculateResult();
    });
  }

  calculateResult() {
    this.#myLotteryList.forEach((lottery) => {
      const result = lottery.returnMyLotteryRank(
        this.#winNumber,
        this.#bonusNumber
      );
      this.#myLotteryRankList[result] += 1;
    });
    Console.print(this.#myLotteryRankList);
    return this.calculateProfitRate();
  }

  // 수익률 계산
  calculateProfitRate() {
    this.#earnedMoney = calculateProfit(this.#myLotteryRankList);
  }

  makeException(errorName) {
    throw new Error(EXCEPTION_MESSAGE[errorName]);
  }
}

const app = new App();
app.play();

module.exports = App;
