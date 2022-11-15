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

  async play() {
    let waterfall = [
      await this.#getMoney(),
      this.#makeLottoPurchaseDtos(),
      await this.#makeLottoInputDto(),
      this.#getResult(),
    ];
    waterfall.forEach((fn) => {
      fn;
    });
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

  async #makeLottoInputDto() {
    const lottoNumbers = await InputConsole.getLotto();
    const lottoAdditinalNumber = await InputConsole.getLottoAdditional(
      lottoNumbers,
    );
    this.#lottoInputDto = new LottoInputDto(lottoNumbers, lottoAdditinalNumber);
  }

  #makeLottoPurchaseDtos() {
    this.#lottoPurchaseDtos = Array.from(
      { length: this.#purchaseNumber },
      () => new LottoPurchaseDto(),
    );
    OutputConsole.lottoNumbers(this.#lottoPurchaseDtos);
  }

  async #getMoney() {
    this.#money = await InputConsole.getMoney();
    this.#purchaseNumber = LottoValidator.getLottoPuchaseNumber(this.#money);
    OutputConsole.lottoPurchaseNumber(this.#purchaseNumber);
  }
}

module.exports = App;

new App().play();
