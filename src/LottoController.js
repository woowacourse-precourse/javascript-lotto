const { GAME_MESSAGE } = require('./lib/Constants');
const { readLine, close } = require('./lib/Utils');

const Bonus = require('./Input/Bonus');
const CalculationLotto = require('./CalculationLotto');
const Lottery = require('./Lottery');
const Lotto = require('./Input/Lotto');
const Price = require('./Input/Price');

class LottoController {
  price;

  lottery;

  bonus;

  start() {
    this.inputPrice();
  }

  inputPrice() {
    readLine(GAME_MESSAGE.input_price, (answer) => this.getPrice(answer));
  }

  getPrice(answer) {
    this.price = new Price(answer);
    return this.publishLotto();
  }

  publishLotto() {
    const lottoCount = this.price.getLottoCount();
    this.lottery = new Lottery(lottoCount).publishLottoList().printLottoList();

    return this.inputLotto();
  }

  inputLotto() {
    readLine(GAME_MESSAGE.input_win_number, (answer) => this.getWinNumbers(answer));
  }

  getWinNumbers(answer) {
    this.lotto = new Lotto(answer);
    return this.inputBonus();
  }

  inputBonus() {
    readLine(GAME_MESSAGE.input_bonus_number, (answer) => this.getBonusNumber(answer));
  }

  getBonusNumber(answer) {
    this.bonus = new Bonus(answer, this.lotto.getNumbers());
    return this.calculationMyLottoResult();
  }

  calculationMyLottoResult() {
    const lottoList = this.lottery.getLottoList();
    const winNumberList = this.lotto.getNumbers();
    const bonusNumber = this.bonus.getBonusNumber();
    const lottoPrice = this.price.getLottoPrice();

    const calculationLotto = new CalculationLotto();
    calculationLotto
      .calculationList(lottoList, winNumberList, bonusNumber)
      .matchResult()
      .calculationLottoRate(lottoPrice)
      .printWinResult()
      .printRate();

    close();
  }
}

module.exports = LottoController;
