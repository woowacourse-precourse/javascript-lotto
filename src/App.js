const { Console } = require('@woowacourse/mission-utils');
const LottoIssuer = require('./LottoIssuer');

class App {
  play() {
    this.receiveMoney();
  }

  receiveMoney() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.checkMoneyValidity(money);
      this.issueLottoes(money);
    });
  }

  issueLottoes(money) {
    const lottoIssuer = new LottoIssuer();
    const issuedLottoes = lottoIssuer.issue(money);
  }

  checkMoneyValidity(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }
}

module.exports = App;
