const { Console, Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, ERROR_MESSAGE, MONEY } = require("./constants");
const Lotto = require("./Lotto");

class App {
  
  play() {
    this.inputMoney(INPUT_MESSAGE.Money);
  }

  inputMoney(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      if (this.validinputMoney(input) === false) throw new Error(ERROR_MESSAGE.moneyError);
      this.money = input;
      this.countLotto(input);
    });
  }

  validinputMoney(input) {
    if (input % MONEY.LottoPrice !== 0) return false;
  }

  countLotto(money) {
    const amountLotto = money / MONEY.LottoPrice;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}]`);
      this.arrayLotto.push(numbers);
    }
    this.lottoInput(MESSAGE.PrintWinningNum);
  }

  lottoInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.arrayWinLotto = input.split(",");
      new Lotto(this.arrayWinLotto);
      this.arrayWinLotto = this.arrayWinLotto.map(number => parseInt(number));
      this.bonusInput(MESSAGE.PrintBonusNum);
    });
  }

  bonusInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      // this.validBonusInput(input);
      this.numberBonus = parseInt(input);
      this.compareLottoNumbers();
    });
  }

  validBonusInput(input) {
    if (!(Number(input) >= 1 && Number(input) <= 45)) throw new Error(ERROR_MESSAGE.lottoRangeError);
    this.arrayWinLotto.map(number => {
      if (number === Number(input)) throw new Error(ERROR_MESSAGE.overlapBonusNumError);
    });
  }

  compareLottoNumbers() {
    this.initializeResult();
    this.arrayLotto.map((numbers) => {
      let countSameNumbers = 0;
      let isBonusNumber = false;
      numbers.map((number) => {
        if(this.arrayWinLotto.includes(number)) countSameNumbers += 1;
        if(this.numberBonus === number) isBonusNumber = true; 
      });
      this.separateWin(countSameNumbers, isBonusNumber);
    });
    this.printResult();
  }

  initializeResult() {
    this.result[MONEY.FifthPlaceMoney] = 0;
    this.result[MONEY.FourthPlaceMoney] = 0;
    this.result[MONEY.ThirdPlaceMoney] = 0;
    this.result[MONEY.SecondPlaceMoney] = 0;
    this.result[MONEY.FristPlaceMoney] = 0;
  }

  separateWin(count, bonus) {
    if (count === 3) this.result[MONEY.FifthPlaceMoney] += 1;
    if (count === 4) this.result[MONEY.FourthPlaceMoney] += 1;
    if (count === 5) {
      if (bonus === false) this.result[MONEY.ThirdPlaceMoney] += 1;
      if (bonus === true) this.result[MONEY.SecondPlaceMoney] += 1;
    }
    if (count === 6) this.result[MONEY.FristPlaceMoney] += 1;
  }

  printResult() {
    Console.print(MESSAGE.RESULT_STATISTICS);
    Console.print(`3개 일치 (5,000원) - ${this.result[MONEY.FifthPlaceMoney]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result[MONEY.FourthPlaceMoney]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result[MONEY.ThirdPlaceMoney]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[MONEY.SecondPlaceMoney]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result[MONEY.FristPlaceMoney]}개`);
    this.calculateProfitPercentage();
  }

  calculateProfitPercentage() {
    let profit = 0;
    for (let key in this.result) {
      profit += parseInt(key) * this.result[key];
    }
    Console.print(`총 수익률은 ${(profit / this.money * 100).toFixed(1)}%입니다.`);
    Console.close();
  }  
}

let app = new App();
app.play();

module.exports = App;
