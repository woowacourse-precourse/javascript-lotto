const { InputConsole, OutputConsole } = require('./Console');
const {
  LottoPurchaseDto,
  LottoInputDto,
  LottoPrizeDto,
} = require('./LottoDto');
const LottoValidator = require('./Lotto.validator');
const MissionUtils = require('@woowacourse/mission-utils');

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
    MissionUtils.Console.close();
  }

  #getMoney() {
    this.#money = InputConsole.getMoney();
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

  #makeLottoInputDto() {
    const lottoNumbers = InputConsole.getLotto();
    const lottoAdditinalNumber = InputConsole.getLottoAdditional(lottoNumbers);
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
