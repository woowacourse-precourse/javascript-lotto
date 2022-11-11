const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/constants');
const getLottoQuantity = require('./utils/getLotteryQuantity');

class App {
  #winNumber;
  #bonusNumber;
  #myLottoList;
  #startMoney;
  #earnedMoney;

  constructor() {
    this.#myLottoList = {
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
      const lotteryQuantity = getLottoQuantity(this.#startMoney);
      return this.makeLotteries(lotteryQuantity);
    });
  }

  // 로또 수량만큼 로또 생성하는 메서드 (new Lotto())
  makeLotteries() {
    // makeRandomLottoNumber() 호출
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
