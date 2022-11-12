const { Console, Random } = require("@woowacourse/mission-utils");
const {
  PRICE_PER_LOTTO,
  LOTTO_LENGTH,
  LOTTO_START,
  LOTTO_END,
  LOTTO,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./domain/constant");
const Util = require("./Util");
const Lotto = require("./Lotto");

class App {
  purchaseAmount = 0;

  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (purchaseAmount) => {
      this.purchaseAmount = purchaseAmount;
      return this.validatePerchaseAmount(purchaseAmount);
    });
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
    const winningLottoNumbers = winningLotto.getLottoNumbers();
    const matchCounts = [];
    const hasBonusNumberArr = [];

    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getLottoNumbers();
      matchCounts.push(this.getMatchCount(lottoNumbers, winningLottoNumbers));
      if (this.hasBonusNumber(lottoNumbers, bonusNumber)) {
        hasBonusNumberArr.push(true);
      }
      if (!this.hasBonusNumber(lottoNumbers, bonusNumber)) {
        hasBonusNumberArr.push(false);
      }
    });

    return this.countLottoRanks({ matchCounts, hasBonusNumberArr });
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

  hasBonusNumber(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  countLottoRanks({ matchCounts, hasBonusNumberArr }) {
    const ranks = [0, 0, 0, 0, 0, 0];
    for (let idx = 0; idx < matchCounts.length; idx++) {
      if (matchCounts[idx] === LOTTO.SIX) ranks[LOTTO.FIRST_PLACE] += 1;
      else if (matchCounts[idx] === LOTTO.FIVE && hasBonusNumberArr[idx]) {
        ranks[LOTTO.SECOND_PLACE] += 1;
      } else if (matchCounts[idx] === LOTTO.FIVE && !hasBonusNumberArr[idx]) {
        ranks[LOTTO.THIRD_PLACE] += 1;
      } else if (matchCounts[idx] === LOTTO.FOUR) {
        ranks[LOTTO.FOURTH_PLACE] += 1;
      } else if (matchCounts[idx] === LOTTO.THREE) {
        ranks[LOTTO.FIFTH_PLACE] += 1;
      }
    }
    return this.calculateWinnings(ranks);
  }

  calculateWinnings(ranks) {
    let totalWinnings = 0;
    totalWinnings += ranks[LOTTO.FIRST_PLACE] * LOTTO.FIRST_PLACE_WINNINGS;
    totalWinnings += ranks[LOTTO.SECOND_PLACE] * LOTTO.SECOND_PLACE_WINNINGS;
    totalWinnings += ranks[LOTTO.THIRD_PLACE] * LOTTO.THIRD_PLACE_WINNINGS;
    totalWinnings += ranks[LOTTO.FOURTH_PLACE] * LOTTO.FOURTH_PLACE_WINNINGS;
    totalWinnings += ranks[LOTTO.FIFTH_PLACE] * LOTTO.FIFTH_PLACE_WINNINGS;
    return this.calculateRateOfReturn({ ranks, totalWinnings });
  }

  calculateRateOfReturn({ ranks, totalWinnings }) {
    let rateOfReturn = (totalWinnings / this.purchaseAmount) * 100;
    rateOfReturn = rateOfReturn.toFixed(1);
    return this.printLottoResult({ ranks, rateOfReturn });
  }

  printLottoResult({ ranks, rateOfReturn }) {
    Console.print(MESSAGE.WINNING_STATISTICS);
    Console.print(MESSAGE.FIFTH_PLACE + `${ranks[5]}` + MESSAGE.EA);
    Console.print(MESSAGE.FOURTH_PLACE + `${ranks[4]}` + MESSAGE.EA);
    Console.print(MESSAGE.THIRD_PLACE + `${ranks[3]}` + MESSAGE.EA);
    Console.print(MESSAGE.SECOND_PLACE + `${ranks[2]}` + MESSAGE.EA);
    Console.print(MESSAGE.FIRST_PLACE + `${ranks[1]}` + MESSAGE.EA);
    Console.print(MESSAGE.TOTAL_RATE_OF_RETURN(rateOfReturn));
    return this.finish();
  }

  finish() {
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
