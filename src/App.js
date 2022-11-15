const { Random } = require('@woowacourse/mission-utils');

const { requireUserInput, printMessage, exitProgram } = require('./userInterface');
const { REQUIRE, ERROR, NOTICE, LOTTO, REGEXP, PRIZE_MONEY } = require('./constant');
const Lotto = require('./Lotto');

class App {
  #amount;

  setAmount(amount) {
    this.#amount = amount;
  }

  #lottos;

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  #winningNumbers;

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  #bonusNumber;

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  validatePurchaseAmount(amount) {
    const isNumber = REGEXP.number.test(amount);
    if (!isNumber) throw new Error(ERROR.purchaseAmount);

    const isZero = amount === 0;
    if (isZero) throw new Error(ERROR.purchaseAmount);

    const isDivisableByPrice = amount % LOTTO.price === 0;
    if (!isDivisableByPrice) throw new Error(ERROR.purchaseAmount);

    return Number(amount);
  }

  countPurchases(amount) {
    return amount / LOTTO.price;
  }

  makeLottoNumbers(count) {
    const lottos = [];

    for (let i = 0; i < count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO.rangeStart,
        LOTTO.rangeEnd,
        LOTTO.count,
      ).sort((a, b) => a - b);

      lottos.push(lotto);
    }

    return lottos;
  }

  noticePurchasedLottos(count, lottos) {
    printMessage(NOTICE.amount(count));

    lottos.forEach((lotto) => printMessage(lotto));
  }

  // validateWinningNumbers(number) {
  //   const isNumbersAndCommas = REGEXP.winningNumbers.test(number);
  //   if (!isNumbersAndCommas) throw new Error(ERROR.winningNumbers);

  //   const numbers = number.split(',').map(Number);
  //   const hasDuplicates = numbers.length !== new Set(numbers).size;
  //   if (hasDuplicates) throw new Error(ERROR.winningNumbers);

  //   const sortedNumbers = numbers.sort((a, b) => a - b);
  //   const firstNumber = sortedNumbers[0];
  //   const lastNumber = sortedNumbers[sortedNumbers.length - 1];
  //   const isInRange = LOTTO.rangeStart <= firstNumber && lastNumber <= LOTTO.rangeEnd;
  //   if (!isInRange) throw new Error(ERROR.winningNumbers);

  //   return sortedNumbers;
  // }

  validateBonusNumber(winningNumbers, bonusNumber) {
    const isNumber = REGEXP.bonusNumber.test(bonusNumber);
    if (!isNumber) throw new Error(ERROR.bonusNumber);

    const isInRange = LOTTO.rangeStart <= bonusNumber && bonusNumber <= LOTTO.rangeEnd;
    if (!isInRange) throw new Error(ERROR.bonusNumber);

    const isDuplicate = winningNumbers.includes(bonusNumber);
    if (isDuplicate) throw new Error(ERROR.bonusNumber);

    return Number(bonusNumber);
  }

  makePrizeStatus(lottos, winningNumbers, bonusNumber) {
    const prizeStatus = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    lottos.forEach((lotto) => {
      const totalNumbersCount = lotto.length + winningNumbers.length;
      const uniqueNumbersCount = new Set([...lotto, ...winningNumbers]).size;
      const matchingNumbersCount = totalNumbersCount - uniqueNumbersCount;
      const isMatchingBonusNumber = lotto.includes(bonusNumber);

      if (matchingNumbersCount === 3) prizeStatus.fifth += 1;
      if (matchingNumbersCount === 4) prizeStatus.fourth += 1;
      if (matchingNumbersCount === 5) prizeStatus.third += 1;
      if (matchingNumbersCount === 5 && isMatchingBonusNumber) prizeStatus.second += 1;
      if (matchingNumbersCount === 6) prizeStatus.first += 1;
    });

    return prizeStatus;
  }

  roundAt(float, at) {
    return Math.ceil(float * 10 ** (at - 1)) / 10 ** (at - 1);
  }

  calculateEarningsRate(status, purchaseAmount) {
    const totalEarnings = Object.entries(status).reduce(
      (currentEarnings, [prize, count]) => currentEarnings + PRIZE_MONEY[prize] * count,
      0,
    );

    const earningsRate = (totalEarnings / purchaseAmount) * 100;
    const formattedEarningsRate = this.roundAt(earningsRate, 2).toLocaleString();

    return formattedEarningsRate;
  }

  printPrizeStatus(status, earningsRate) {
    const { fifth, fourth, third, second, first } = status;

    printMessage(NOTICE.winningStatus);
    printMessage(NOTICE.fifth(fifth));
    printMessage(NOTICE.fourth(fourth));
    printMessage(NOTICE.third(third));
    printMessage(NOTICE.second(second));
    printMessage(NOTICE.first(first));
    printMessage(NOTICE.earningsRate(earningsRate));
  }

  purchasePhase() {
    requireUserInput(REQUIRE.purchaseAmount, (amount) => {
      const validPurchaseAmount = this.validatePurchaseAmount(amount);
      this.setAmount(validPurchaseAmount);

      const count = this.countPurchases(this.#amount);
      const lottos = this.makeLottoNumbers(count);
      this.setLottos(lottos);
      this.noticePurchasedLottos(count, this.#lottos);

      return this.winningNumbersPhase();
    });
  }

  winningNumbersPhase() {
    requireUserInput(REQUIRE.winningNumbers, (inputNumbers) => {
      const winningNumbers = inputNumbers.split(',').map(Number);
      const lotto = new Lotto(winningNumbers);
      this.setWinningNumbers(lotto.getNumbers());

      return this.bonusNumberPhase();
    });
  }

  bonusNumberPhase() {
    requireUserInput(REQUIRE.bonusNumber, (bonusNumber) => {
      const validBonusNumber = this.validateBonusNumber(this.#winningNumbers, bonusNumber);
      this.setBonusNumber(validBonusNumber);

      return this.statusPhase();
    });
  }

  statusPhase() {
    const prizeStatus = this.makePrizeStatus(this.#lottos, this.#winningNumbers, this.#bonusNumber);
    const earningStatus = this.calculateEarningsRate(prizeStatus, this.#amount);

    this.printPrizeStatus(prizeStatus, earningStatus);

    exitProgram();
  }

  play() {
    this.purchasePhase();
  }
}

const app = new App();
app.play();

module.exports = App;
