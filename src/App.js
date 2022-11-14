const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
  LottoPrizeDto,
} = require('./LottoDto');
const { LOTTO } = require('./Resource');
const LottoValidator = require('./Lotto.validator');

class App {
  #lottoPurchaseDtos = [];
  #lottoInputDto;
  #lottoPrizeDto;

  async play() {
    const money = await InputConsole.getMoney();

    this.#lottoPurchaseDtos = Array.from(
      { length: money / LOTTO.LOTTO_COST },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoPurchaseNumber(money / LOTTO.LOTTO_COST);
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);

    const lottoNumbers = await InputConsole.getLotto();
    const lottoAdditinalNumber = await InputConsole.getLottoAdditional();
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);

    this.#lottoPrizeDto = new LottoPrizeDto();
    this.#lottoPurchaseDtos.forEach((lottoPurchaseDto) => {
      LottoValidator.checkLottoWin(
        this.#lottoInputDto,
        lottoPurchaseDto,
        this.#lottoPrizeDto,
      );
    });
    OutputConsole.result(this.#lottoPrizeDto);
  }
}

module.exports = App;

new App().play();
