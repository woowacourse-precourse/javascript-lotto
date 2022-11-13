const Lotto = require("./Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const LOTTERY_PRICE = 1000;
const LOTTERY_MIN_NUMBER = 1;
const LOTTERY_MAX_NUMBER = 45;


class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lotteries = [];
    this.purchaseAmount = null;
    this.winningLotto = null;
    this.bonusNumber = null;
  }

  setPurchaseAmount(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  validatePurchaseAmount(purchaseAmount) {
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

    this.view.receiveWinningNumber();
  }

  setWinningLotto(number) {
    const winningNumber = number.split(',').map((num) => Number(num));
    const winningLotto = new Lotto(winningNumber);
    this.winningLotto = winningLotto;
  }

  setBonusNumber(bonus) {
    this.validateBonusNumber(bonus);
    this.bonusNumber = Number(bonus);
  }

  validateBonusNumber(bonus) {
    if (Number.isNaN(Number(bonus))) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (!Number.isInteger(Number(bonus))) {
      throw new Error("[ERROR] 정수를 입력해주세요.")
    }

    if (Number(bonus) < LOTTERY_MIN_NUMBER || Number(bonus) > LOTTERY_MAX_NUMBER) {
      throw new Error(`[ERROR] 보너스 번호는 ${LOTTERY_MIN_NUMBER}~${LOTTERY_MAX_NUMBER}까지의 숫자여야 합니다.`);
    }

    this.checkDuplicationBonusNumber(Number(bonus));
  }

  checkDuplicationBonusNumber(bonus) {
    const winningNumber = this.winningLotto.getNumber();
    if (winningNumber.includes(bonus)) {
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 번호를 입력해주세요.")
    }
  }
}

module.exports = LottoGame;
