const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const BonusLotto = require('./BonusLotto');

const LOTTO_PRICE = {
  purchase: 1000,
  0: 0,
  1: 0,
  2: 0,
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonus: 30000000,
};

class LottoGame {
  constructor() {
    this.money = 0;
    this.purchaseList = [];
    this.winningNumber = {
      main: [],
      bonus: 0,
    };
    this.result = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
      yield: 0,
      earn: 0,
    };
  }

  run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.money = new Payment(input).getMoney();
    this.purchase(this.money / 1000);
  }

  purchase(number) {
    Console.print(`\n${number}개를 구매했습니다.`);
    this.issue(number);
    this.printLottoNumbers();
    this.drawWinningNumbers();
  }

  issue(number) {
    let count = 0;
    while (count < number) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.purchaseList.push(lottoNumbers);
      count += 1;
    }
  }

  printLottoNumbers() {
    this.purchaseList.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  drawWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      this.winningNumber.main = new Lotto(input.split(',')).getNumbers();
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.winningNumber.bonus = new BonusLotto(input, this.winningNumber.main).getNumber();
      this.calculateResult();
      this.printResult();
    });
  }

  calculateResult() {
    this.calculateMatching();
    this.calculateYield();
  }

  calculateMatching() {
    this.purchaseList.forEach((lottoNumbers) => {
      const matchingCount = this.countMatching(lottoNumbers);
      this.result[matchingCount] += 1;
      this.result.earn += LOTTO_PRICE[matchingCount];
    });
  }

  countMatching(lottoNumbers) {
    let count = 0;
    this.winningNumber.main.forEach((number) => {
      count += lottoNumbers.includes(Number(number)) ? 1 : 0;
    });
    return count === 5 ? this.checkBonus(lottoNumbers) : count;
  }

  checkBonus(lottoNumbers) {
    return lottoNumbers.includes(this.winningNumber.bonus) ? 'bonus' : 5;
  }

  calculateYield() {
    this.result.yield = ((this.result.earn / this.money) * 100).toFixed(1);
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.result[3]}개
4개 일치 (50,000원) - ${this.result[4]}개
5개 일치 (1,500,000원) - ${this.result[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.bonus}개
6개 일치 (2,000,000,000원) - ${this.result[6]}개
총 수익률은 ${this.result.yield}%입니다.`);
    Console.close();
  }
}

module.exports = LottoGame;
