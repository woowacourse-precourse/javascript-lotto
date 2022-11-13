const { Console, Random } = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE } = require("./constants/message.js");
const {
  LOTTO_PRICE,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
  LOTTO_DIGITS,
} = require("./constants/condition.js");
const LottoGameView = require("./LottoGameView.js");
const Lotto = require("./Lotto.js");
const Validation = require("./Validation.js");

class LottoGame {
  lottos;
  winningNumbers;

  constructor() {
    this.LottoGameView = new LottoGameView();
  }

  play() {
    this.purchaseLottoPhase();
  }

  purchaseLottoPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      Validation.validatePurchaseAmount(purchaseAmount);
      const lottoQuantity = this.getLottoQuantity(purchaseAmount);
      this.createLottos(lottoQuantity);
      this.LottoGameView.printLottoQuantity(lottoQuantity);
      this.LottoGameView.printEachLottoNumbers(this.lottos);

      this.saveWinningNumbersPhase();
    });
  }
  getLottoQuantity(purchaseAmount) {
    return parseInt(purchaseAmount, 10) / LOTTO_PRICE;
  }
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUM_MIN_RANGE, LOTTO_NUM_MAX_RANGE, LOTTO_DIGITS);
  }
  createLottos(lottoQuantity) {
    this.lottos = Array.from({ length: lottoQuantity }, () => {
      const lottoNumbers = this.generateLottoNumbers();
      const ascendingNumbers = lottoNumbers.sort((numA, numB) => numA - numB);

      return new Lotto(ascendingNumbers);
    });
  }

  saveWinningNumbersPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      const winningNumbersArr = winningNumbers.split(",");
      Validation.validateLottoNumber(winningNumbersArr);
      this.winningNumbers = winningNumbersArr;

      this.saveBonusNumberPhase();
    });
  }
  saveBonusNumberPhase() {
    this.LottoGameView.requestInput(REQUEST_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      Validation.validateBonusNumber(bonusNumber, this.winningNumbers);
      this.bonusNumber = bonusNumber;
    });
  }
}

module.exports = LottoGame;
