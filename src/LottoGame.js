const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoIssuer = require('./LottoIssuer');
const LottoResult = require('./LottoResult');
const { INPUT_MESSAGE } = require('./Constants');

class LottoGame {
  #payment;

  #lottoIssuer;

  #lotto;

  #lottoResult = new LottoResult();

  run() {
    Console.readLine(INPUT_MESSAGE.purchase, (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.#payment = new Payment(input);
    this.purchase(this.#payment.getMoney() / 1000);
  }

  purchase(number) {
    this.#lottoIssuer = new LottoIssuer(number);
    this.#lottoIssuer.print();
    this.drawWinningNumbers();
  }

  drawWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.winning, (winningNumber) => {
      this.#lotto = new Lotto(winningNumber.split(','));
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonuse, (bonusNumber) => {
      this.#lotto.setBonusNumber(bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    this.#lottoResult.print(
      this.#lotto.getNumbers(),
      this.#lottoIssuer.getLotteries(),
      this.#payment.getMoney()
    );
  }
}

module.exports = LottoGame;
