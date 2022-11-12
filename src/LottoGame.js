const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoBonus = require('./LottoBonus');
const LottoIssuer = require('./LottoIssuer');

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
    this.lottoIssuer = new LottoIssuer();
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
      rate: 0,
      profit: 0,
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
    this.lottoIssuer.issue(number);
    this.lottoIssuer.print();
    this.drawWinningNumbers();
  }

  drawWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      this.winningNumber.main = new Lotto(input.split(',')).getNumbers();
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.winningNumber.bonus = new LottoBonus(input, this.winningNumber.main).getNumber();
      this.calculateResult();
      this.printResult();
    });
  }

  calculateResult() {
    this.calculateMatching();
    this.calculateRate();
  }

  calculateMatching() {
    this.lottoIssuer.getLotteries().forEach((lottoNumbers) => {
      const matchingCount = this.countMatching(lottoNumbers);
      this.result[matchingCount] += 1;
      this.result.profit += LOTTO_PRICE[matchingCount];
    });
  }

  countMatching(lottoNumbers) {
    const lottoNumbersSet = new Set(lottoNumbers);
    const count = this.winningNumber.main.filter((number) => lottoNumbersSet.has(number)).length;
    return count === 5 ? this.checkBonus(lottoNumbersSet) : count;
  }

  checkBonus(lottoNumbers) {
    return lottoNumbers.has(this.winningNumber.bonus) ? 'bonus' : 5;
  }

  calculateRate() {
    this.result.rate = ((this.result.profit / this.money) * 100).toFixed(1);
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.result[3]}개
4개 일치 (50,000원) - ${this.result[4]}개
5개 일치 (1,500,000원) - ${this.result[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.bonus}개
6개 일치 (2,000,000,000원) - ${this.result[6]}개
총 수익률은 ${this.result.rate}%입니다.`);
    Console.close();
  }
}

module.exports = LottoGame;
