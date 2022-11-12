const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoBonus = require('./LottoBonus');
const LottoIssuer = require('./LottoIssuer');
const LottoResult = require('./LottoResult');

class LottoGame {
  constructor() {
    this.money = 0;
    this.lottoIssuer = new LottoIssuer();
    this.lottoResult = new LottoResult();
    this.winningNumber = {
      main: [],
      bonus: 0,
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
      this.lottoResult.print(this.winningNumber, this.lottoIssuer.getLotteries(), this.money);
    });
  }
}

module.exports = LottoGame;
