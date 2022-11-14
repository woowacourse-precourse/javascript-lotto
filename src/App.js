const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  isPurchasePriceToNumber,
  getTotalProfit,
} = require("./util/validate/purchase");
const {
  LOTTO_PURCHASE_PRICE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  STATISTIC,
  PRIZE_KEY,
  PRIZE_REWARD,
  PRIZE_RESULT,
} = require("./util/constants");
class App {
  #lotto;

  price;
  winNumberList = [];
  lottoList = [];
  bonusNumber;

  constructor() {}
  play() {
    this.getPurchasePrice();
  }
  // 구입 금액 입력
  getPurchasePrice() {
    Console.readLine(INPUT_MESSAGE.PURCHASE_PRICE, (price) => {
      if (isPurchasePriceToNumber(price))
        throw new Error(ERROR_MESSAGE.PRICE_NUMBER);
      this.price = Number(price);
      this.getLottoList(this.price / LOTTO_PURCHASE_PRICE);
    });
  }

  // 로또 리스트 가져오기
  getLottoList(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push(numbers);
    }
    this.printLottoList();
  }
  // 로또 출력하기
  printLottoList() {}
  // 당첨 번호 입력하기
  getWinNumber() {}
  // 보너스 금액 입력
  getBonusNumber() {}
  getWinStatistic() {}
  printWinStatistic(winStatistic) {}
}

const game = new App();
game.play();

module.exports = App;
