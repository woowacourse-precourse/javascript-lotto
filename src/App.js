const Console = require("./Console");
const Lotto = require("./Lotto");
const Validator = require("./validator/Validator");
const {
  THREE,
  FOUR,
  FIVE,
  FIVE_AND_BONUS,
  SIX,
  price,
} = require("./constants");
const LottoAdmin = require("./LottoAdmin");

class App {
  constructor() {
    this.lottos = [];
    this.winNumbers = [];
    this.bonusNumber = null;
    this.winStatistics = {
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
      this.winStatistics = this.getWinStatistics(
        [this.lottos, this.winStatistics],
        [this.winNumbers, this.bonusNumber]
      );
      LottoAdmin.printWinStatistics(this.winStatistics);
      const margin = this.getMargin(price, [this.lottos, this.winStatistics]);
      Console.print(`총 수익률은 ${margin}입니다.`);
      Console.close();
    });
  }

  getWinStatistics([lottos, initialState], [winNumbers, bonusNumber]) {
    return lottos.reduce((acc, lotto) => {
      const sameCount = LottoAdmin.getSameNumWithInputLotto(lotto, winNumbers);
      if (sameCount === 3) return { ...acc, [THREE]: acc[THREE] + 1 };
      if (sameCount === 4) return { ...acc, [FOUR]: acc[FOUR] + 1 };
      if (sameCount === 5 && !lotto.includes(bonusNumber))
        return { ...acc, [FIVE]: acc[FIVE] + 1 };
      if (sameCount === 5)
        return { ...acc, [FIVE_AND_BONUS]: acc[FIVE_AND_BONUS] + 1 };
      if (sameCount === 6) return { ...acc, [SIX]: acc[SIX] + 1 };
      return acc;
    }, initialState);
  }

  getMargin(price, [lottos, winStatistics]) {
    const margin =
      winStatistics[THREE] * price[0] +
      winStatistics[FOUR] * price[1] +
      winStatistics[FIVE] * price[2] +
      winStatistics[FIVE_AND_BONUS] * price[3] +
      winStatistics[SIX] * price[4];
    const totalLottoPrice = lottos.length * 1000;
    const middle = (margin / totalLottoPrice) * 100;
    return Math.round(middle * 100) / 100 + "%";
  }
}

module.exports = App;
