const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
  LottoPrizeDto,
} = require('./LottoDto');
const LottoValidator = require('./Lotto.validator');

class App {
  #lottoPurchaseDtos;
  #lottoInputDto;
  #lottoPrizeDto;

   play() {
    const money =  InputConsole.getMoney();
    const purchaseNumber = LottoValidator.getLottoPuchaseNumber(money);
    OutputConsole.lottoPurchaseNumber(purchaseNumber);

    this.#lottoPurchaseDtos = Array.from(
      { length: purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);

    const lottoNumbers =  InputConsole.getLotto();
    const lottoAdditinalNumber =  InputConsole.getLottoAdditional(lottoNumbers);
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
