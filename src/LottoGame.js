const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, LOTTO_PRICE } = require('./Constants');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoIssuer = require('./LottoIssuer');
const LottoResult = require('./LottoResult');

class LottoGame {
  #payment;

  #lottoIssuer;

  #lotto;

  #lottoResult = new LottoResult();

  run() {
    Console.readLine(INPUT_MESSAGE.purchase, (input) => this.purchase(input));
  }

  purchase(input) {
    this.#payment = new Payment(input);
    this.#lottoIssuer = new LottoIssuer(this.#payment.getMoney() / LOTTO_PRICE);
    this.#lottoIssuer.print();
    this.drawWinningNumbers();
  }

  drawWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.winning, (winningNumbers) => {
      this.#lotto = new Lotto(winningNumbers.split(','));
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonus, (bonusNumber) => {
      this.#lotto.setBonusNumber(bonusNumber);
      this.printResult();
    });
  }

  printResult() {
    this.#lottoResult.print(this.#lotto.getNumbers(), this.#lottoIssuer.getLotteries());
    Console.close();
  }
}

module.exports = LottoGame;
