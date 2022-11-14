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
    const money = await InputConsole.GetMoney();
    const purchaseNumber = LottoValidator.getLottoPuchaseNumber(money);
    OutputConsole.LottoPurchaseNumber(purchaseNumber);

    this.#lottoPurchaseDtos = Array.from(
      { length: purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.LottoNumbers(this.#lottoPurchaseDtos);

    const lottoNumbers = await InputConsole.GetLotto();
    const lottoAdditinalNumber = await InputConsole.GetLottoAdditional(lottoNumbers);
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);

    this.#lottoPrizeDto = new LottoPrizeDto();
    this.#lottoPurchaseDtos.forEach((lottoPurchaseDto) => {
      LottoValidator.checkLottoWin(
        this.#lottoInputDto,
        lottoPurchaseDto,
        this.#lottoPrizeDto,
      );
    });
    OutputConsole.Result(this.#lottoPrizeDto);
    OutputConsole.SumMoney(this.#lottoPrizeDto, money);
  }
}

module.exports = App;
