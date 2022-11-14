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

  constructor() {
    this.#lottoPrizeDto = new LottoPrizeDto();
  }

  play() {
    const { purchaseNumber, money } = this.#getMoney();

    this.#makeLottoPurchaseDtos(purchaseNumber);
    this.#makeLottoInputDto();

    this.#getResult(money);
  }

  #getResult(money) {
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

  #makeLottoInputDto() {
    const lottoNumbers = InputConsole.getLotto();
    const lottoAdditinalNumber = InputConsole.getLottoAdditional(lottoNumbers);
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);
  }

  #makeLottoPurchaseDtos(purchaseNumber) {
    this.#lottoPurchaseDtos = Array.from(
      { length: purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);
  }

  #getMoney() {
    const money = InputConsole.getMoney();
    const purchaseNumber = LottoValidator.getLottoPuchaseNumber(money);
    OutputConsole.lottoPurchaseNumber(purchaseNumber);
    return { purchaseNumber, money };
  }
}

module.exports = App;
