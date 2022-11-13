const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
} = require('./LottoDto');
const { LOTTO } = require('./Resource');

class App {
  #lottoPurchaseDtos = [];
  #lottoInputDto;

  async play() {
    const money = await InputConsole.getMoney();

    this.#lottoPurchaseDtos = Array.from(
      { length: money / LOTTO.LOTTO_COST },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);

    const lottoNumbers = await InputConsole.getLotto();
    const lottoAdditinalNumber = await InputConsole.getLottoAdditional();
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);
  }
}

module.exports = App;

new App().play();
