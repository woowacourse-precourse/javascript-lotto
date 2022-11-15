const { Console, Random } = require("@woowacourse/mission-utils");
const Exception = require("./Exception");
const {
  MESSAGE,
  SENTANCE,
  CORRECT,
  CORRECT_MONEY,
} = require("./constant/constant.js");

let exception = new Exception();

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers !== undefined) exception.checkCount(numbers);
    if (numbers !== undefined) exception.checkDuplicate(numbers);

    this.cost = 0;
    this.#numbers = numbers;
    this.mylotto = [];
    this.bonusNumber = 0;
    this.lottoCount = [];
    this.rankCount = 0;
    this.rankCountArray = [];
    this.earningProfit = 0;
    this.result = {
      [CORRECT_MONEY.FIRST]: 0,
      [CORRECT_MONEY.SECOND]: 0,
      [CORRECT_MONEY.THIRD]: 0,
      [CORRECT_MONEY.FOURTH]: 0,
      [CORRECT_MONEY.FIFTH]: 0,
    };

    this.match = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  sortLotto(lotto) {
    lotto.sort((a, b) => {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    return lotto;
  }

  printMylotto(lottoCount) {
    Console.print(`${lottoCount}${SENTANCE.BUY}`);
    this.makeLottoNumber(lottoCount);
    this.mylotto.forEach((mylottoArray) => {
      let strMyLotto = `[${String(mylottoArray).replace(/,/g, ", ")}]`;
      Console.print(strMyLotto);
    });
    this.enterWinningNumber();
  }

  makeLottoNumber(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto = this.sortLotto(lotto);
      exception.checkCount(lotto);
      this.mylotto.push(lotto);
    }
  }

  enterWinningNumber() {
    Console.readLine(`\n${MESSAGE.WINNING}\n`, (winningNumber) => {
      this.#numbers = winningNumber.split(",").map(Number);
      exception.checkCount(this.#numbers);
      exception.checkDuplicate(this.#numbers);
      this.#numbers.map((number) => {
        exception.checkString(number);
        exception.checkRangeofNumber(number);
      });
      
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine(`\n${MESSAGE.BONUS}\n`, (bonusNumber) => {
      this.bonusNumber = parseInt(bonusNumber);
      exception.checkString(this.bonusNumber);
      exception.checkRangeofNumber(this.bonusNumber);
      this.calcResults();
    });
  }

  calcResults() {
    this.mylotto.forEach((mylottoArray) => {
      this.compareNumbers(mylottoArray);
    });
    this.printResults();
  }

  compareBonusNumber(mylottoArray) {
    if (mylottoArray.includes(this.bonusNumber)) return 7;
    return 5;
  }

  compareNumbers(mylottoArray) {
    this.rankCount = 0;
    mylottoArray.forEach((number) => {
      if (this.#numbers.includes(number)) {
        this.rankCount += 1;
      }
    });
    if (this.rankCount === 5) {
      this.rankCount = this.compareBonusNumber(mylottoArray);
    }
    this.rankCountArray.push(this.rankCount);
  }

  printResults() {
    Console.print(`\n${SENTANCE.STATICS}`);
    Console.print(`${SENTANCE.LINE}`);
    this.matchRank(this.rankCountArray);
    this.printWinnningResult();
    this.printEarningRate();
    Console.close();
  }

  printWinnningResult() {
    Console.print(`${CORRECT[5]}${this.match.FIFTH}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[4]}${this.match.FOURTH}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[3]}${this.match.THIRD}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[2]}${this.match.SECOND}${SENTANCE.UNIT}`);
    Console.print(`${CORRECT[1]}${this.match.FIRST}${SENTANCE.UNIT}`);
  }

  // 일치하는 개수
  matchRank(rankCountArray) {
    rankCountArray.forEach((count) => {
      if (count === 3) this.match.FIFTH += 1;
      if (count === 4) this.match.FOURTH += 1;
      if (count === 5) this.match.THIRD += 1;
      if (count === 7) this.match.SECOND += 1;
      if (count === 6) this.match.FIRST += 1;
    });
  }

  printEarningRate() {
    Console.print(
      `${SENTANCE.PROFIT_HEAD} ${this.calEarningRate()}${SENTANCE.PROFIT_REAR}`
    );
  }

  calEarningRate() {
    Object.keys(this.match).forEach((key) => {
      this.earningProfit += CORRECT_MONEY[key] * this.match[key];
    });
    const EARNING_RATE = ((this.earningProfit / this.cost) * 100).toFixed(1);

    return EARNING_RATE;
  }
}
module.exports = Lotto;
