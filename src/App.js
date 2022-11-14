const Console = require("./Console");
const Lotto = require("./Lotto");
const Validator = require("./validator/Validator");
const { price } = require("./constants");
const LottoAdmin = require("./LottoAdmin");
const Ranker = require("./Ranker");

class App {
  constructor() {
    this.lottos = [];
    this.win = [];
    this.bonus = null;
  }

  play() {
    Console.getUserInput(Console.REQUEST_LOTTO_PRICE, (price) => {
      if (!Validator.isValidPrice(price)) return;

      const lottoNum = Lotto.caculateLottoNumPerUnit(Number(price));
      Console.print("\n" + lottoNum + Console.PURCHASED_LOTTO_COUNT_MSG);
      this.generateLottos(lottoNum);
      Lotto.printLottos(this.lottos);
      this.requestLottoNumbers();
    });
  }

  generateLottos(lottoNum) {
    const lottos = LottoAdmin.generateLottoAnswer(lottoNum);
    lottos.forEach((lotto) => this.lottos.push([...lotto]));
  }

  getInputNumbers(numbers) {
    return numbers
      .split(",")
      .map(Number)
      .sort((a, b) => (a > b ? 1 : -1));
  }

  requestLottoNumbers() {
    Console.getUserInput("\n" + Console.REQUEST_LOTTO_NUMBER, (numbers) => {
      const inputNumbers = this.getInputNumbers(numbers);
      this.win = new Lotto(inputNumbers).getNumbers;
      this.requestBonusNumber();
    });
  }

  startBonusInput(number) {
    if (!Validator.isValidBonus(number)) return;
    this.bonus = Number(number);
    Console.print("\n" + Console.WIN_STATISTICS);
  }

  requestBonusNumber() {
    Console.getUserInput("\n" + Console.REQUEST_BONUS_NUMBER, (number) => {
      this.startBonusInput(number);
      const ranks = Ranker.getPriceRank(this.lottos, [this.win, this.bonus]);
      LottoAdmin.printWinStatistics(ranks);
      const margin = LottoAdmin.getMargin(price, [this.lottos, ranks]);
      Console.print(`총 수익률은 ${margin}%입니다.`);
      Console.close();
    });
  }
}

module.exports = App;
