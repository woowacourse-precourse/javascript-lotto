const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const WinningNumber = require("./WinningNumber");
const BonusNumber = require("./BonusNumber");
const CheckLotto = require("./CheckLotto");
const { MESSAGE, LOTTO } = require("./constant");
class App {
  constructor() {
    this.quantity = 0;
    this.buyPrice = 0;
    this.lottoNumbers = [];
    this.lottoTickets = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.rate = 0;
  }

  play() {
    this.buy();
  }

  buy() {
    Console.readLine(MESSAGE.BUY, (buyPrice) => {
      const buyLotto = new BuyLotto(buyPrice);

      this.buyPrice = buyLotto.price;
      this.quantity = buyLotto.quantity;
      this.lottoNumbers = buyLotto.makeLottoNumbers();

      this.lotto();
    });
  }

  lotto() {
    const lottoNumbers = this.lottoNumbers;
    const lottoTickets = this.lottoTickets;

    lottoNumbers.forEach((numbers) => {
      const lottoTicket = new Lotto(numbers);
      lottoTickets.push(lottoTicket.numbers);
    });
    Console.print("");
    Console.print(MESSAGE.LOTTO_QUANTITY(lottoTickets.length));
    lottoTickets.forEach((numbers) => {
      Console.print(`[${numbers.join(", ")}]`);
    });

    Console.print("");
    this.inputWinningNumber();
  }

  inputWinningNumber() {
    Console.readLine(MESSAGE.WINNING, (numbers) => {
      const winningNumbers = new WinningNumber(numbers);

      this.winningNumbers = winningNumbers.winningNumber;

      Console.print("");
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.BONUS, (number) => {
      const bonusNumber = new BonusNumber(number, this.winningNumbers);

      this.bonusNumber = bonusNumber.number;
      Console.print("");
      this.check();
    });
  }

  check() {
    const checkLotto = new CheckLotto(this.lottoTickets, this.winningNumbers, this.bonusNumber);
    Console.close();
  }

  end() {}
}
module.exports = App;
