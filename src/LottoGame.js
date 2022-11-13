const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoIssuer = require('./LottoIssuer');
const LottoResult = require('./LottoResult');

class LottoGame {
  #Payment;

  #LottoIssuer;

  #Lotto;

  #LottoResult;

  run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.#Payment = new Payment(input);
    this.purchase(this.#Payment.getMoney() / 1000);
  }

  purchase(number) {
    this.#LottoIssuer = new LottoIssuer(number);
    this.#LottoIssuer.issue();
    this.#LottoIssuer.print();
    this.drawWinningNumbers();
  }

  drawWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.drawBonusNumber(winningNumber.split(','));
    });
  }

  drawBonusNumber(winningNumber) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.#Lotto = new Lotto(winningNumber, bonusNumber);
      this.#LottoResult = new LottoResult();
      this.#LottoResult.print(
        this.#Lotto.getNumbers(),
        this.#LottoIssuer.getLotteries(),
        this.#Payment.getMoney()
      );
    });
  }
}

module.exports = LottoGame;
