const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
} = require('./LottoDto');
const { LOTTO_COST } = require('./Resource');

class App {
  #LottoPurchases = [];
  #LottoInputDto;

  async play() {
    const money = await InputConsole.getMoney();

    this.#LottoPurchases = Array.from(
      { length: money / LOTTO_COST },
      () => new LottoPurchaseDto(),
    );

    const lottoNumbers = await InputConsole.getLotto();
    this.#LottoInputDto = new LottoInputDto(lottoNumbers, 0);
  }
}

module.exports = App;

new App().play();
