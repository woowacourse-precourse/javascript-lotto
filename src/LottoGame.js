const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const LOTTO_PRICE = {
  purchase: 1000,
  0: 0,
  1: 0,
  2: 0,
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonuse: 30000000,
};

class LottoGame {
  constructor() {
    this.money = 0;
    this.purchaseList = [];
    this.winningNumber = {
      main: [],
      bonuse: [],
    };
    this.result = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonuse: 0,
      yield: 0,
      earn: 0,
    };
  }

  run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.money = Number(input);
    this.purchase(this.money / 1000);
  }

  purchase(number) {
    Console.print(`\n${number}개를 구매했습니다.`);
    this.issue(number);
    this.printLottoNumbers();
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
      this.drawBonuseNumber();
    });
  }

  drawBonuseNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      this.winningNumber.bonuse = input;
      this.calculateResult();
    });
  }

  calculateResult() {
    this.calculateMatching();
    // this.calculateYield();
  }

  calcaulateMatching() {
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
    return count === 5 ? this.checkBonuse(lottoNumbers) : count;
  }

  checkBonuse(lottoNumbers) {
    return lottoNumbers.includes(this.winningNumber.bonuse) ? 'bonuse' : 5;
  }
}

module.exports = LottoGame;
