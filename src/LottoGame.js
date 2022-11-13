const Lotto = require("./Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const LOTTERY_PRICE = 1000;

class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lotteries = [];
  }

  setPurchaseAmount(purchaseAmount) {
    this.validate(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  validate(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    if ((purchaseAmount < LOTTERY_PRICE)) {
      throw new Error(`[ERROR] 최소 입력 금액은 ${LOTTERY_PRICE}원입니다.`);
    }

    if (!Number.isInteger(purchaseAmount) || purchaseAmount % LOTTERY_PRICE) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.")
    }
  }
  
  issueLottories() {
    const lottoQuantity = this.getLottoQuantity();
    while (this.lotteries.length < lottoQuantity) {
      const lotto = this.getNewLotto();
      this.lotteries.push(lotto);
    }

    this.printPurchasedLotteries(lottoQuantity);
  }

  getLottoQuantity() {
    return this.purchaseAmount / LOTTERY_PRICE;
  }

  getNewLotto() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    const lotto = new Lotto(lottoNumber);
    return lotto;
  }

  printPurchasedLotteries(lottoQuantity) {
    Console.print(`${lottoQuantity}${MESSAGE.OUTPUT.PURCHASE_COUNT}`);
    this.lotteries.forEach((lotto) => {
      const number = lotto.getNumber();
      const printNumber = number.map((num) => num).join(', ');
      Console.print(`[${printNumber}]`);
    });

    this.view.gameFinish();
  }
}

module.exports = LottoGame;
