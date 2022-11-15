const { Console } = require("@woowacourse/mission-utils");
const Seed = require("../src/Seed");
const LottoGenerator = require("../src/LottoGenerator");
const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");
const { INPUT_MESSAGE } = require("../src/constants");
class App {
  seed;
  lottoTicket;
  winningNumber;
  bonusNumber;

  play() {
    this.getInput(INPUT_MESSAGE.SEED_MONEY, this.getSeedMoney);
  }

  getInput = (message, inputFunction) => {
    Console.readLine(message, inputFunction);
  };

  getSeedMoney = (input) => {
    this.seed = new Seed(Number(input));
    this.lottoTicket = new LottoGenerator(this.seed.ticketAmount);
    this.getInput(INPUT_MESSAGE.WINNING_NUMBER, this.getWinnerNumber);
  };

  getWinnerNumber = (input) => {
    const splitByComma = input.split(",");
    this.winningNumber = new Lotto(splitByComma);
    this.getInput(INPUT_MESSAGE.BONUS_NUMBER, this.getBonusNumber);
  };

  getBonusNumber = (input) => {
    this.bonusNumber = new Bonus(input);
    this.winningNumber.isUniqueBonus(this.bonusNumber.bonus);
    this.winningNumber.calculate(
      this.seed.seedMoney,
      this.lottoTicket.ticketLists,
      this.bonusNumber.bonus,
    );
  };
}

module.exports = App;
