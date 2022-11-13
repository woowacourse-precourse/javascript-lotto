const { Console, Random, } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR_MESSAGE, } = require('./domain/constant');
const Util = require('./Util');
const Lotto = require('./Lotto');

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
    if (!Util.isDivisibleBy(purchaseAmount, LOTTO.PRICE)) {
      throw new Error(ERROR_MESSAGE.NON_DIVISIBLE_INPUT);
    }
    return this.countLottoQuantity(purchaseAmount);
  }

  countLottoQuantity(purchaseAmount) {
    const lottoQuantity = purchaseAmount / LOTTO.PRICE;
    return this.makeLottos(lottoQuantity);
  }

  makeLottos(lottoQuantity) {
    const lottos = [];
    while (lottos.length < lottoQuantity) {
      const lottoNumbers = Util.getSortedArrayInAsc(this.pickLottoNumbers());
      lottos.push(new Lotto(lottoNumbers));
    }
    return this.printLottos(lottos);
  }

  pickLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.START,
      LOTTO.END,
      LOTTO.LENGTH
    );
    return lottoNumbers;
  }

  printLottos(lottos) {
    Console.print(MESSAGE.PURCHASE_QUANTITY(lottos.length));
    lottos.forEach((lotto) => lotto.printLottoNumbers());
    Console.print('\n');
    return this.readWinningNumbers(lottos);
  }

  readWinningNumbers(lottos) {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, (winningNumbersInput) => {
      this.validateWinningNumbersInput(winningNumbersInput);
      const winningNumbers = this.winningNumbersToArray(winningNumbersInput);
      this.validateWinningNumbers(winningNumbers);
      return this.readBonusNumber({ lottos, winningNumbers });
    });
  }

  validateWinningNumbersInput(str) {
    const NUMBER_COMMA_REGEXP = /^[0-9,]+$/;
    const START_IS_COMMA_REGEXP = /^[,]/;
    const END_IS_COMMA_REGEXP = /[,]$/;
    const DUPLICATE_COMMA_REGEXP = /[,]{2,}/;

    if (
      !NUMBER_COMMA_REGEXP.test(str) ||
      DUPLICATE_COMMA_REGEXP.test(str) ||
      START_IS_COMMA_REGEXP.test(str) ||
      END_IS_COMMA_REGEXP.test(str)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
  }

  winningNumbersToArray(winningNumbers) {
    const winningNumbersArr = winningNumbers.split(',');
    return winningNumbersArr.map((num) => parseInt(num));
  }

  validateWinningNumbers(numbers) {
    if (!Util.hasNElements(numbers, LOTTO.LENGTH)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_LOTTO);
    }
    if (!Util.isBetween(numbers, LOTTO.START, LOTTO.END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (Util.hasDuplicateElements(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATE_NUMBERS);
    }
  }

  readBonusNumber({ lottos, winningNumbers }) {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (bonusNumber) => {
      this.validateBonusNumber({ bonusNumber, winningNumbers });
      bonusNumber = parseInt(bonusNumber);
      return this.countLottoResult({ lottos, winningNumbers, bonusNumber });
    });
  }

  validateBonusNumber({ bonusNumber, winningNumbers }) {
    if (
      !Util.isNumericInput(bonusNumber) ||
      !Util.isBetween(bonusNumber, LOTTO.START, LOTTO.END)
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (winningNumbers.includes(parseInt(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
  }

  countLottoResult({ lottos, winningNumbers, bonusNumber }) {
    const matchCounts = [];
    const hasBonusNumberArr = [];

    lottos.forEach((lotto) => {
      matchCounts.push(lotto.getMatchCount(winningNumbers));
      if (lotto.hasBonusNumber(bonusNumber)) {
        hasBonusNumberArr.push(true);
      }
      if (!lotto.hasBonusNumber(bonusNumber)) {
        hasBonusNumberArr.push(false);
      }
    });
    return this.countLottoRanks({ matchCounts, hasBonusNumberArr });
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
    Console.print(`${ MESSAGE.FIFTH_PLACE }${ ranks[LOTTO.FIFTH_PLACE] }${ MESSAGE.EA }`);
    Console.print(`${ MESSAGE.FOURTH_PLACE }${ ranks[LOTTO.FOURTH_PLACE] }${ MESSAGE.EA }`);
    Console.print(`${ MESSAGE.THIRD_PLACE }${ ranks[LOTTO.THIRD_PLACE] }${ MESSAGE.EA }`);
    Console.print(`${ MESSAGE.SECOND_PLACE }${ ranks[LOTTO.SECOND_PLACE] }${ MESSAGE.EA }`);
    Console.print(`${ MESSAGE.FIRST_PLACE }${ ranks[LOTTO.FIRST_PLACE] }${ MESSAGE.EA }`);
    Console.print(MESSAGE.TOTAL_RATE_OF_RETURN(rateOfReturn));
    return this.finish();
  }

  finish() {
    Console.print(MESSAGE.FINISH_GAME);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
