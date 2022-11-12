const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoGame {
  constructor() {
    this.money = 0;
    this.purchaseList = [];
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
    });
  }
}

module.exports = LottoGame;
