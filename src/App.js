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
  #purchaseNumber;
  #money;

  constructor() {
    this.#lottoPrizeDto = new LottoPrizeDto();
  }

  play() {
    this.#getMoney();
    this.#makeLottoPurchaseDtos();
    this.#makeLottoInputDto();
    this.#getResult();
  }

  async #getMoney() {
    this.#money = await InputConsole.getMoney();
    this.#purchaseNumber = LottoValidator.getLottoPuchaseNumber(this.#money);
    OutputConsole.lottoPurchaseNumber(this.#purchaseNumber);
  }

  #makeLottoPurchaseDtos() {
    this.#lottoPurchaseDtos = Array.from(
      { length: this.#purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);
  }

  async #makeLottoInputDto() {
    const lottoNumbers = await InputConsole.getLotto();
    const lottoAdditinalNumber = await InputConsole.getLottoAdditional(
      lottoNumbers,
    );
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);
  }

  #getResult() {
    this.#lottoPurchaseDtos.forEach((lottoPurchaseDto) => {
      LottoValidator.checkLottoWin(
        this.#lottoInputDto,
        lottoPurchaseDto,
        this.#lottoPrizeDto,
      );
    });
    OutputConsole.result(this.#lottoPrizeDto);
    OutputConsole.sumMoney(this.#lottoPrizeDto, this.#money);
  }
}

module.exports = App;

new App().play();
