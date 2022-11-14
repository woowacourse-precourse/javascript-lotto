const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, MONEY, ERROR_MESSAGE } = require("./constants/constants");
const Lotto = require("../src/Lotto");

class App {
  constructor() {
    this.money = 0;
    this.arrayLotto = [];
    this.arrayWinLotto = 0;
    this.numberBonus = 0;
    this.result = {};
  }

  play() {
    this.moneyInput(MESSAGE.PROMPT_MONEY);
  }

  moneyInput(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      if (this.validMoneyInput(input) === false) throw new Error(ERROR_MESSAGE.UNIT_ERROR);
      this.money = input;
      this.countLotto(input);
    });
  }

  validMoneyInput(input) {
    if (input % MONEY.LOTTO_PRICE !== 0) return false;
  }

  countLotto(money) {
    const amountLotto = money / MONEY.LOTTO_PRICE;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}]`);
      this.arrayLotto.push(numbers);
    }
    this.lottoInput(MESSAGE.PROMPT_LOTTO);
  }

  lottoInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.arrayWinLotto = input.split(",");
      new Lotto(this.arrayWinLotto);
      this.arrayWinLotto = this.arrayWinLotto.map(number => parseInt(number));
      this.bonusInput(MESSAGE.PROMPT_BONUS);
    });
  }

  bonusInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.validBonusInput(input);
      this.numberBonus = parseInt(input);
      this.compareLottoNumbers();
    });
  }

  validBonusInput(input) {
    if (!(Number(input) >= 1 && Number(input) <= 45)) throw new Error(ERROR_MESSAGE.BONUS_RANGE_ERROR);
    this.arrayWinLotto.map(number => {
      if (number === Number(input)) throw new Error(ERROR_MESSAGE.BONUS_SAME_ERROR);
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
    this.result[MONEY.THREE_SAME_MONEY] = 0;
    this.result[MONEY.FOUR_SAME_MONEY] = 0;
    this.result[MONEY.FIVE_SAME_MONEY] = 0;
    this.result[MONEY.FIVE_BONUS_SAME_MONEY] = 0;
    this.result[MONEY.SIX_SAME_MONEY] = 0;
  }

  separateWin(count, bonus) {
    if (count === 3) this.result[MONEY.THREE_SAME_MONEY] += 1;
    if (count === 4) this.result[MONEY.FOUR_SAME_MONEY] += 1;
    if (count === 5) {
      if (bonus === false) this.result[MONEY.FIVE_SAME_MONEY] += 1;
      if (bonus === true) this.result[MONEY.FIVE_BONUS_SAME_MONEY] += 1;
    }
    if (count === 6) this.result[MONEY.SIX_SAME_MONEY] += 1;
  }

  printResult() {
    Console.print(MESSAGE.RESULT_STATISTICS);
    Console.print(`3개 일치 (5,000원) - ${this.result[MONEY.THREE_SAME_MONEY]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result[MONEY.FOUR_SAME_MONEY]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result[MONEY.FIVE_SAME_MONEY]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[MONEY.FIVE_BONUS_SAME_MONEY]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result[MONEY.SIX_SAME_MONEY]}개`);
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