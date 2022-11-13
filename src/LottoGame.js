const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Payment = require('./Payment');
const LottoIssuer = require('./LottoIssuer');
const LottoResult = require('./LottoResult');
const { MESSAGE } = require('./Constants');

class LottoGame {
  #Payment;

  #LottoIssuer;

  #Lotto;

  #LottoResult;

  run() {
    Console.readLine(MESSAGE.purchase, (input) => this.inputMoney(input));
  }

  inputMoney(input) {
    this.#Payment = new Payment(input);
    this.purchase(this.#Payment.getMoney() / 1000);
  }

  purchase(number) {
    this.#LottoIssuer = new LottoIssuer(number);
    this.#LottoIssuer.print();
    this.drawWinningNumbers();
  }

  drawWinningNumbers() {
    Console.readLine(MESSAGE.winning, (winningNumber) => {
      this.#Lotto = new Lotto(winningNumber.split(','));
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    Console.readLine(MESSAGE.bonuse, (bonusNumber) => {
      this.#Lotto.setBonusNumber(bonusNumber);
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
