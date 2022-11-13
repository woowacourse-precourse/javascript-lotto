const { readLine, print, close } = require("@woowacourse/mission-utils").Console;
const Generator = require('./Generator');
const Lotto = require("./Lotto");

class App {
  #lotto;
  #purchaseAmount;

  constructor() {
    this.Generator = new Generator();
  }

  getPurchaseAmount() {
    print('구입금액을 입력해 주세요.');
    readLine('', (purchaseAmount) =>  {
      this.#purchaseAmount = purchaseAmount;
      this.Generator.generateRandomNumbers(purchaseAmount);
      print(' ');
      this.printNumberOfRandomNumbers(this.Generator.getNumberOfRandomNumbers());
      this.printRandomNumbers(this.Generator.getRandomNumbers());
      this.getLottoNumber();
    });
  }

  printNumberOfRandomNumbers(numberOfRandoms) {
    print(`${numberOfRandoms}개를 구매했습니다.`);
  }

  printRandomNumbers(randomNumbers) {
    randomNumbers.forEach((numbers) => {
      print(numbers);
    })
  }

  getLottoNumber() {
    print('\n당첨 번호를 입력해 주세요.');
    readLine('', (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.getBonusNumber();
    })
  }

  getBonusNumber() {
    print('\n보너스 번호를 입력해 주세요.');
    readLine('', (number) => {
      close();
      this.#lotto.setBonusNumber(number);
      print(' ')
      this.getWinningStats();
    })
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
    this.printWinningStats(countWinning);
    this.printRateOfReturn(countWinning);
  }

  getCountWinning(randomNumbers) {
    let count = 0;
    let bonus = false;
    let lottoNumber = this.#lotto.getLotto();
    console.log(randomNumbers, lottoNumber);
    randomNumbers.forEach((number) => {
      if (lottoNumber.includes(number)) {
        count += 1;
      }

      if (lottoNumber[lottoNumber.length - 1] === number) {
        bonus = true;
      }
    })

    return { count, bonus };
  }

  printRateOfReturn(countWinning) {
    let total = 0;
    total += countWinning[0] * 5000;
    total += countWinning[1] * 50000;
    total += countWinning[2] * 1500000;
    total += countWinning[3] * 30000000;
    total += countWinning[4] * 2000000000;

    const rateOfReturn = ((total / this.#purchaseAmount) * 100).toFixed(1);
    print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  printWinningStats(countWinning) {
    print(`3개 일치 (5,000원) - ${countWinning[0]}개`);
    print(`4개 일치 (50,000원) - ${countWinning[1]}개`);
    print(`5개 일치 (1,500,000원) - ${countWinning[2]}개`);
    print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${countWinning[3]}개`);
    print(`6개 일치 (2,000,000,000원) - ${countWinning[4]}개`);
  }

  play() {
    this.getPurchaseAmount();
  }
}
new App().play();
module.exports = App;
