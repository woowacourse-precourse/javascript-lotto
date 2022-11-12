const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/constants');
const Lotto = require('./Lotto');
const getLottoQuantity = require('./utils/getLotteryQuantity');
const makeRandomLottoNumber = require('./utils/makeRandomLottoNumber');

class App {
  #winNumber;
  #bonusNumber;
  #myLotteryList;
  #myLotteryRankList;
  #startMoney;
  #earnedMoney;
  #myLotteryQuantity;

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

  // 구입 금액 입력 메서드
  buy() {
    Console.readLine(GAME_MESSAGE.INSERT_PURCHASE_COST, (userInput) => {
      this.#startMoney = Number(userInput);
      this.#myLotteryQuantity = getLottoQuantity(this.#startMoney);
      this.#myLotteryList = Array(this.#myLotteryQuantity).fill({}); // 처음부터 Array(Object) 모양 고정시켜 V8 Map Space에 불필요한 hiddenClass 생성을 막기 위함 (push 사용 x)
      return this.makeLotteries();
    });
  }

  // 로또 수량만큼 로또 생성하는 메서드 (new Lotto())
  makeLotteries() {
    this.#myLotteryList = this.#myLotteryList.map((blankObject) => {
      const myLottery = makeRandomLottoNumber();
      blankObject = new Lotto(myLottery);
      return blankObject;
    });
    return this.myLotteryResult();
  }

  // 로또 결과 출력하기
  myLotteryResult() {
    // Lotto.checkMyLotteryRank() 사용
  }

  // 로또 당첨번호 생성
  makeWinNumber() {
    // 당첨번호 입력
    // 보너스 넘버 입력
  }

  // 수익률 출력하기
  printProfitRate() {}
}

const app = new App();
app.play();

module.exports = App;
