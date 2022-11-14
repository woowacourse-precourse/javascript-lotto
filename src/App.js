const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE } = require('./domain/constant');
const Util = require('./Util');
const Lotto = require('./Lotto');
const Validation = require('./domain/Validation');

class App {
  purchaseAmount = 0;

  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (purchaseAmount) => {
      Validation.validatePerchaseAmount(purchaseAmount);
      this.purchaseAmount = purchaseAmount;
      return this.countLottoQuantity(purchaseAmount);
    });
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
    const lottoNumbers = Random.pickUniqueNumbersInRange(LOTTO.START, LOTTO.END, LOTTO.LENGTH);
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
      Validation.validateWinningNumbersInput(winningNumbersInput);
      const winningNumbers = this.winningNumbersToArray(winningNumbersInput);
      Validation.validateWinningNumbers(winningNumbers);
      return this.readBonusNumber({ lottos, winningNumbers });
    });
  }

  winningNumbersToArray(winningNumbers) {
    const winningNumbersArr = winningNumbers.split(',');
    return winningNumbersArr.map((num) => parseInt(num));
  }

  readBonusNumber({ lottos, winningNumbers }) {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (bonusNumber) => {
      Validation.validateBonusNumber({ bonusNumber, winningNumbers });
      bonusNumber = parseInt(bonusNumber);
      return this.countLottoResult({ lottos, winningNumbers, bonusNumber });
    });
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
    Console.print(`${MESSAGE.FIFTH_PLACE}${ranks[LOTTO.FIFTH_PLACE]}${MESSAGE.EA}`);
    Console.print(`${MESSAGE.FOURTH_PLACE}${ranks[LOTTO.FOURTH_PLACE]}${MESSAGE.EA}`);
    Console.print(`${MESSAGE.THIRD_PLACE}${ranks[LOTTO.THIRD_PLACE]}${MESSAGE.EA}`);
    Console.print(`${MESSAGE.SECOND_PLACE}${ranks[LOTTO.SECOND_PLACE]}${MESSAGE.EA}`);
    Console.print(`${MESSAGE.FIRST_PLACE}${ranks[LOTTO.FIRST_PLACE]}${MESSAGE.EA}`);
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
