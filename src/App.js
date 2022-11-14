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
    const purchaseNumber = LottoValidator.getLottoPuchaseNumber(money);
    OutputConsole.lottoPurchaseNumber(purchaseNumber);

    this.#lottoPurchaseDtos = Array.from(
      { length: purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);

    const lottoNumbers = await InputConsole.getLotto();
    const lottoAdditinalNumber = await InputConsole.getLottoAdditional(lottoNumbers);
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
    OutputConsole.sumMoney(this.#lottoPrizeDto, money);
  }
}

module.exports = App;
