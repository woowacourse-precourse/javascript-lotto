const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
  LottoValidator,
} = require('./LottoDto');
const { LOTTO_COST } = require('./Resource');

class App {
  #LottoPurchases = [];

  async play() {
    const money = await InputConsole.getMoney();
    LottoValidator.checkMoney(money);

    this.#LottoPurchases = Array.from(
      { length: money / LOTTO_COST },
      () => new LottoPurchaseDto(),
    );
    const lottoNumbers = await InputConsole.getLotto();
  }
}

module.exports = App;

new App().play();
