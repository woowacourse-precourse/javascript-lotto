const { Console } = require("@woowacourse/mission-utils");
const Generator = require('./Generator');
const Lotto = require("./Lotto");

class App {
  #lotto;
  #purchaseAmount;

  constructor() {
    this.Generator = new Generator();
  }

  getPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) =>  {
      this.#purchaseAmount = purchaseAmount;
      this.Generator.generateRandomNumbers(purchaseAmount);
      this.printNumberOfRandomNumbers(this.Generator.getNumberOfRandomNumbers());
      this.printRandomNumbers(this.Generator.getRandomNumbers());
      this.getLottoNumber();
    });
  }

  printNumberOfRandomNumbers(numberOfRandoms) {
    Console.print(`\n${numberOfRandoms}개를 구매했습니다.`);
  }

  printRandomNumbers(randomNumbers) {
    randomNumbers.forEach((numbers) => {
      Console.print(`[${this.sortAscRandomNumbers(numbers).join(', ')}]`);
    })
  }

  sortAscRandomNumbers(numbers) {
    return numbers.sort((a, b) => a - b)
  }

  getLottoNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.getBonusNumber();
    })
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => {
      Console.close();
      this.#lotto.setBonusNumber(number);
      this.printWinningStatsAndRateOfReturn();
    })
  }

  printWinningStatsAndRateOfReturn() {
    const countWinning = this.getWinningStats();

    this.printWinningStats(countWinning);
    this.printRateOfReturn(countWinning);
  }

  getWinningStats() {
    const countWinning = [0, 0, 0, 0, 0];

    this.Generator.getRandomNumbers().forEach((randomNumbers) => {
      const { count, bonus } = this.getCountWinning(randomNumbers);
      if (count === 3) countWinning[0] += 1;
      if (count === 4) countWinning[1] += 1;
      if (count === 5 && !bonus) countWinning[2] += 1;
      if (count === 5 && bonus) countWinning[3] += 1;
      if (count === 6) countWinning[4] += 1;
    });

    return countWinning;
  }

  getCountWinning(randomNumbers) {
    const lottoNumber = this.#lotto.getLotto();
    const bonusNumber = lottoNumber[lottoNumber.length - 1];
    let count = 0;
    let bonus = false;

    randomNumbers.forEach((number) => {
      if (lottoNumber.includes(number)) count += 1;
      if (bonusNumber === number) bonus = true;
    })

    return { count, bonus };
  }

  printWinningStats(countWinning) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${countWinning[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${countWinning[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${countWinning[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${countWinning[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${countWinning[4]}개`);
  }

  printRateOfReturn(countWinning) {
    Console.print(`총 수익률은 ${this.calcRateOfReturn(countWinning)}%입니다.`);
  }

  calcRateOfReturn(countWinning) {
    let total = 0;
    total += countWinning[0] * 5000;
    total += countWinning[1] * 50000;
    total += countWinning[2] * 1500000;
    total += countWinning[3] * 30000000;
    total += countWinning[4] * 2000000000;

    return Number(((total / this.#purchaseAmount) * 100).toFixed(1)).toLocaleString();
  }

  play() {
    this.getPurchaseAmount();
  }
}

module.exports = App;
