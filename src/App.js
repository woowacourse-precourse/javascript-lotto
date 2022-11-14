const Console = require("./Console");
const Lotto = require("./Lotto");
const Validator = require("./validator/Validator");
const { THREE, FOUR, FIVE, FIVE_AND_BONUS, SIX } = require("./constants");
const LottoAdmin = require("./LottoAdmin");

class App {
  constructor() {
    this.lottos = [];
    this.winNumbers = [];
    this.bonusNumber = null;
    this.winStatics = {
      [THREE]: 0,
      [FOUR]: 0,
      [FIVE]: 0,
      [FIVE_AND_BONUS]: 0,
      [SIX]: 0,
    };
  }
  play() {
    Console.getUserInput(Console.REQUEST_LOTTO_PRICE, (price) => {
      if (!Validator.isValidPrice(price)) return;

      const lottoNum = Lotto.caculateLottoNumPerUnit(Number(price));
      Console.print("\n" + lottoNum + Console.PURCHASED_LOTTO_COUNT_MSG);

      const lottos = LottoAdmin.generateLottoAnswer(lottoNum);
      lottos.forEach((lotto) => this.lottos.push([...lotto]));
      Lotto.printLottos(this.lottos);
      this.requestLottoNumbers();
    });
  }

  requestLottoNumbers() {
    Console.getUserInput("\n" + Console.REQUEST_LOTTO_NUMBER, (numbers) => {
      const inputNumbers = numbers
        .split(",")
        .map(Number)
        .sort((a, b) => (a > b ? 1 : -1));
      this.winNumbers = new Lotto(inputNumbers).getNumbers;
      this.requestBonusNumber();
    });
  }

  requestBonusNumber() {
    Console.getUserInput("\n" + Console.REQUEST_BONUS_NUMBER, (number) => {
      Validator.isValidBonus(number);
      this.bonusNumber = Number(number);
      Console.print("\n" + Console.WIN_STATISTICS);
    });
  }
}

module.exports = App;
