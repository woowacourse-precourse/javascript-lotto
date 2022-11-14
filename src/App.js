const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoIssuer = require('./LottoIssuer');

class App {
  play() {
    this.receiveMoney();
  }

  receiveMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.checkMoneyValidity(money);
      this.issueLottoes(money);
      this.getLuckyNumbers();
    });
  }

  issueLottoes(money) {
    const lottoIssuer = new LottoIssuer();
    const issuedLottoes = lottoIssuer.issue(money);
    this.printLottoes(issuedLottoes);
  }

  checkMoneyValidity(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  printLottoes(issuedLottoes) {
    Console.print(`\n${issuedLottoes.length}개를 구매했습니다.`);
    issuedLottoes.forEach((issuedLotto) => {
      Console.print(issuedLotto);
    });
  }

  getLuckyNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (stringNumbers) => {
      const numbers = [...stringNumbers.split(',')].map(Number);
      this.lotto = new Lotto(numbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (stringNumber) => {
      this.lotto.validateBonusNumber(Number(stringNumber));
    });
  }
}

const app = new App();
app.getLuckyNumbers();

module.exports = App;
