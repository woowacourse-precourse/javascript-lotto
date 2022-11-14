const { Console, Random } = require("@woowacourse/mission-utils");

const PROMPT_MONEY = '구입금액을 입력해 주세요.';
const PROMPT_LOTTO = '당첨 번호를 입력해 주세요.';
const PROMPT_BONUS = '보너스 번호를 입력해 주세요.';
const RESULT_STATISTICS = '\n당첨 통계\n---';
const THREE_SAME_MONEY = '5000';
const FOUR_SAME_MONEY = '50000';
const FIVE_SAME_MONEY = '1500000';
const FIVE_BONUS_SAME_MONEY = '30000000';
const SIX_SAME_MONEY = '2000000000';
const LOTTO_PRICE = 1000;

class App {
  constructor() {
    this.money = 0;
    this.arrayLotto = [];
    this.arrayWinLotto = 0;
    this.numberBonus = 0;
    this.result = {};
  }

  play() {
    this.moneyInput(PROMPT_MONEY);
  }

  moneyInput(prompt) {
    Console.readLine(`${prompt}\n`, (input) => {
      this.money = input;
      this.countLotto(input);
    });
  }

  countLotto(money) {
    const amountLotto = money / LOTTO_PRICE;
    Console.print(`\n${amountLotto}개를 구매했습니다.`);
    this.createLotto(amountLotto);
  }

  createLotto(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}]`);
      this.arrayLotto.push(numbers);
    }
    this.lottoInput(PROMPT_LOTTO);
  }

  lottoInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.arrayWinLotto = input.split(",");
      this.arrayWinLotto = this.arrayWinLotto.map(number => parseInt(number));
      this.bonusInput(PROMPT_BONUS);
    });
  }

  bonusInput(prompt) {
    Console.readLine(`\n${prompt}\n`, (input) => {
      this.numberBonus = parseInt(input);
      this.compareLottoNumbers();
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
    this.result[THREE_SAME_MONEY] = 0;
    this.result[FOUR_SAME_MONEY] = 0;
    this.result[FIVE_SAME_MONEY] = 0;
    this.result[FIVE_BONUS_SAME_MONEY] = 0;
    this.result[SIX_SAME_MONEY] = 0;
  }

  separateWin(count, bonus) {
    if (count === 3) this.result[THREE_SAME_MONEY] += 1;
    if (count === 4) this.result[FOUR_SAME_MONEY] += 1;
    if (count === 5) {
      if (bonus === false) this.result[FIVE_SAME_MONEY] += 1;
      if (bonus === true) this.result[FIVE_BONUS_SAME_MONEY] += 1;
    }
    if (count === 6) this.result[SIX_SAME_MONEY] += 1;
  }

  printResult() {
    Console.print(RESULT_STATISTICS);
    Console.print(`3개 일치 (5,000원) - ${this.result[THREE_SAME_MONEY]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result[FOUR_SAME_MONEY]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result[FIVE_SAME_MONEY]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[FIVE_BONUS_SAME_MONEY]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result[SIX_SAME_MONEY]}개`);
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

new App().play();

module.exports = App;
