const { Console, Random } = require("@woowacourse/mission-utils");
const {
  PRICE_PER_LOTTO,
  LOTTO_LENGTH,
  LOTTO_START,
  LOTTO_END,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./domain/constant");
const Util = require("./Util");
const Lotto = require("./Lotto");

class App {
  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (purchaseAmount) =>
      this.validatePerchaseAmount(purchaseAmount)
    );
  }

  validatePerchaseAmount(purchaseAmount) {
    if (!Util.isNumericInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_NUMERIC_INPUT);
    }
    if (!Util.isPositiveNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NON_POSITIVE_INPUT);
    }
    if (Util.isZeroStartInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.ZERO_START_INPUT);
    }
    if (!Util.isDivisibleBy(purchaseAmount, PRICE_PER_LOTTO)) {
      throw new Error(ERROR_MESSAGE.NON_DIVISIBLE_INPUT);
    }
    return this.countLottoQuantity(purchaseAmount);
  }

  countLottoQuantity(purchaseAmount) {
    const lottoQuantity = purchaseAmount / PRICE_PER_LOTTO;
    return this.makeLottos(lottoQuantity);
  }

  makeLottos(lottoQuantity) {
    const lottos = [];
    while (lottos.length < lottoQuantity) {
      const lottoNumbers = Util.getSortedArrayInAsc(this.getLottoNumbers());
      lottos.push(new Lotto(lottoNumbers));
    }
    return this.printLottos(lottos);
  }

  getLottoNumbers() {
    const lottoNumbers = [];
    while (!Util.hasNElements(lottoNumbers, LOTTO_LENGTH)) {
      const number = Random.pickNumberInRange(1, 45);
      if (!lottoNumbers.includes(number)) {
        lottoNumbers.push(number);
      }
    }
    return lottoNumbers;
  }

  printLottos(lottos) {
    Console.print(MESSAGE.PURCHASE_QUANTITY(lottos.length));
    lottos.forEach((lotto) => Console.print(lotto.getLottoNumbers()));
    Console.print("\n");
    return this.readWinningNumbers(lottos);
  }

  readWinningNumbers(lottos) {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, (winningNumbers) => {
      const winningLotto = new Lotto(winningNumbers);
      return this.readBonusNumber({ lottos, winningLotto });
    });
  }

  readBonusNumber({ lottos, winningLotto }) {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (bonusNumber) => {
      this.validateBonusNumber({ bonusNumber, winningLotto });
      bonusNumber = parseInt(bonusNumber);
      return this.countLottoResult({ lottos, winningLotto, bonusNumber });
    });
  }

  validateBonusNumber({ bonusNumber, winningLotto }) {
    if (
      !Util.isNumericInput(bonusNumber) ||
      !Util.isBetween(bonusNumber, LOTTO_START, LOTTO_END)
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (winningLotto.getLottoNumbers().includes(parseInt(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
  }

  countLottoResult({ lottos, winningLotto, bonusNumber }) {
    return;
  }

  getMatchCount(lottoNumbers, winningLottoNumbers) {
    let matchCount = 0;
    winningLottoNumbers.forEach((num) => {
      if (lottoNumbers.includes(num)) {
        matchCount += 1;
      }
    });
    return matchCount;
  }
}

const app = new App();
app.play();

module.exports = App;
