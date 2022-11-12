const { Console } = require('@woowacourse/mission-utils');
const { APP_MESSAGE, EXCEPTION_MESSAGE } = require('./constants/constants');
const Lotto = require('./Lotto');
const getLottoQuantity = require('./utils/getLotteryQuantity');
const isValidLottery = require('./utils/isValidLottery');
const makeRandomLottoNumber = require('./utils/makeRandomLottoNumber');

class App {
  #myLotteryList;
  #startMoney;
  #myLotteryQuantity;
  #winNumber;
  #bonusNumber;
  #myLotteryRankList;
  #earnedMoney;

  constructor() {
    this.#myLotteryRankList = {
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

  // 로또 당첨번호 생성
  makeWinNumber() {
    // 당첨번호 입력
    // 보너스 넘버 입력
  }

  // 수익률 출력하기
  printProfitRate() {}

  makeException(errorName) {
    throw new Error(EXCEPTION_MESSAGE[errorName]);
  }
}

const app = new App();
app.play();

module.exports = App;
