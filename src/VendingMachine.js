const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  isMultipleOf1000,
  divide1000,
  splitStrByComma,
  getRandomNumbers,
  getRank,
  getWinMessage,
  getWinAmount,
  getRateStrOfProfit,
  lottoArrToString,
} = require('./Util');
const { LOTTOS, CONSOLE_MSG, ERROR_MSG } = require('./lib/constant');

class VendingMachine {
  #purchaseAmount;
  #numberOfLottos;
  #randomNumbers;
  #lottoMachine;
  #scores = [];
  #rankBoard;

  init() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(CONSOLE_MSG.enterPerchaseAmount, this.askPurchaseAmountCb.bind(this));
  }

  askPurchaseAmountCb(answer) {
    this.validate(answer);
    this.setPurchaseOptions(answer);
    this.#randomNumbers = this.pickRandomNumbers();
    this.printPickedNumbers();
    this.askLottoNumbers();
  }

  validate(purchaseAmount) {
    if (!isMultipleOf1000(purchaseAmount)) {
      throw new Error(ERROR_MSG.invalidUnitOf1000);
    }

    return true;
  }

  setPurchaseOptions(purchaseAmount) {
    const puchaseAmount = purchaseAmount.trim();
    const numberOfLottos = divide1000(purchaseAmount);

    this.#purchaseAmount = puchaseAmount;
    this.#numberOfLottos = numberOfLottos;
  }

  pickRandomNumbers(cnt = this.#numberOfLottos) {
    const { start, end, size } = LOTTOS;
    const randomNumbers = [];

    for (let i = 0; i < cnt; i++) {
      randomNumbers.push(getRandomNumbers(start, end, size));
    }

    return randomNumbers;
  }

  printPickedNumbers() {
    const pickedNumbers = this.#randomNumbers.map(lottoArrToString).join('\n');

    Console.print(CONSOLE_MSG.confirmNumbers(this.#numberOfLottos));
    Console.print(pickedNumbers);
  }

  askLottoNumbers() {
    Console.readLine(CONSOLE_MSG.enterLottoNumbers, this.askLottoNumbersCb.bind(this));
  }

  askLottoNumbersCb(answer) {
    const lottoNumbers = splitStrByComma(answer)
      .map(Number)
      .sort((a, b) => a - b);

    this.#lottoMachine = new Lotto(lottoNumbers);
    this.askBonusNumber();
  }

  askBonusNumber() {
    Console.readLine(CONSOLE_MSG.enterBonusNumber, this.askBonusNumberCb.bind(this));
  }

  askBonusNumberCb(answer) {
    this.#lottoMachine.setBonus(Number(answer));
    this.#randomNumbers.forEach((numbers) => {
      const { score, bonusScore } = this.#lottoMachine.getScore(numbers);
      this.#scores.push([score, bonusScore]);
    });

    this.#rankBoard = this.getRanksByScores();
    const [winMessages, rateOfProfit] = this.calculateStatistics();
    this.printStatistics(winMessages, rateOfProfit);
  }

  getRanksByScores() {
    const rankBoard = new Array(LOTTOS.size).fill(0);

    this.#scores.forEach(([score, bonusScore]) => {
      const rank = getRank(score, bonusScore);
      rankBoard[rank] += 1;
    });

    return rankBoard;
  }

  calculateStatistics() {
    const ranks = Object.entries(this.#rankBoard).slice(1).reverse();
    const winMessages = ranks.map(([rank, cnt]) => getWinMessage(rank, cnt)).join('\n');

    const profit = ranks.reduce((acc, [rank, cnt]) => acc + getWinAmount(rank, cnt), 0);
    const rateOfProfit = getRateStrOfProfit(profit, this.#purchaseAmount);

    return [winMessages, rateOfProfit];
  }

  printStatistics(winMessages, rateOfProfit) {
    const printMsg = [CONSOLE_MSG.winStatistics, winMessages, CONSOLE_MSG.confirmRate(rateOfProfit)].join('\n');
    Console.print(printMsg);
  }
}

module.exports = VendingMachine;
