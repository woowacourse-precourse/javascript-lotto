const { Console } = require('@woowacourse/mission-utils');
const {
  APP_MESSAGE,
  EXCEPTION_REASON,
  RANK_STATISTICS_MESSAGE,
} = require('./constants/constants');
const Lotto = require('./Lotto');
const calculateProfit = require('./utils/calculate/calculateProfit');
const countPurchasedLotteries = require('./utils/count/countPurchasedLotteries');
const calculateProfitRate = require('./utils/calculate/calculateProfitRate');
const verifyValidLottery = require('./utils/verify/verifyValidLottery');
const processRandomLottoNumber = require('./utils/process/processRandomLottoNumber');
const verifyNumberType = require('./utils/verify/verifyNumberType');
const verifyStartMoneyUnit = require('./utils/verify/verifyStartMoneyUnit');
const makeException = require('./utils/exception/makeException');

class App {
  #startMoney;
  #earnedMoney;
  #myLotteryQuantity;
  #myLotteryList;
  #myLotteryPrintList;
  #winNumber;
  #bonusNumber;
  #myLotteryRankList;
  #profitRate;

  constructor() {
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
      if (!verifyNumberType(userInput))
        makeException(EXCEPTION_REASON.INPUT_NOT_NUMBER);
      if (!verifyStartMoneyUnit(Number(userInput)))
        makeException(EXCEPTION_REASON.MONEY_UNIT_INCORRECT);
      this.#startMoney = Number(userInput);
      this.#myLotteryQuantity = countPurchasedLotteries(this.#startMoney);
      this.#myLotteryList = Array(this.#myLotteryQuantity).fill(0); // 처음부터 Array(Object) 모양 고정시켜 V8 Map Space에 불필요한 hiddenClass 생성을 막기 위함 (push 사용 x)
      this.#myLotteryPrintList = Array(this.#myLotteryQuantity).fill(0); // 위와 동일한 이유로 생성
      return this.makeLotteries();
    });
  }

  makeLotteries() {
    this.#myLotteryList = this.#myLotteryList.map((blankObject) => {
      const myLottery = processRandomLottoNumber();
      blankObject = new Lotto(myLottery); // 내 로또 리스트에 로또 객체들 생성 후 할당.
      return blankObject;
    });
    return this.myLotteryResult();
  }

  myLotteryResult() {
    Console.print(APP_MESSAGE.PURCHASE_AMOUNT(this.#myLotteryQuantity));
    this.#myLotteryList.forEach((lottery, i) => {
      this.#myLotteryPrintList[i] = lottery.returnMyLottery(); // 매번 Console.print()를 하게되면 속도가 매우 느려질 수 있기에, 배열에 로또 번호들을 저장해두고 한번에 Print()
    });
    Console.print(this.#myLotteryPrintList.join('\n')); // 내 로또 리스트 출력
    return this.makeWinNumber();
  }

  makeWinNumber() {
    Console.readLine(APP_MESSAGE.INSERT_WIN_NUMBER, (userInput) => {
      const answerLottery = userInput.split(',').map((separateInput) => {
        separateInput = Number(separateInput.trim());
        return separateInput;
      });

      const validCheck = verifyValidLottery(answerLottery);
      if (validCheck !== true) return makeException(validCheck);

      this.#winNumber = answerLottery;
      return this.makeBonusNumber();
    });
  }

  makeBonusNumber() {
    Console.readLine(APP_MESSAGE.INSERT_BONUS_NUMBER, (userInput) => {
      const inputBonusNumber = Number(userInput);
      if (this.#winNumber.includes(inputBonusNumber))
        return makeException(EXCEPTION_REASON.INPUT_OVERLAPPED);

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
    return this.calculateProfitRate();
  }

  calculateProfitRate() {
    this.#earnedMoney = calculateProfit(this.#myLotteryRankList);
    this.#profitRate = calculateProfitRate(this.#startMoney, this.#earnedMoney);
    return this.printResult();
  }

  printResult() {
    Console.print(APP_MESSAGE.GET_RANK_STATISTICS);
    for (let rank = 5; rank >= 1; rank -= 1) {
      const myRankData = this.#myLotteryRankList[rank];
      Console.print(RANK_STATISTICS_MESSAGE[rank](myRankData));
    }
    Console.print(RANK_STATISTICS_MESSAGE.PROFIT_RATE(this.#profitRate));
    return this.endGame();
  }

  endGame() {
    return Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
