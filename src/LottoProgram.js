const { GAME_MESSAGE } = require('./lib/Constants');
const { close, readLine } = require('./lib/Utils');

const Bonus = require('./Input/Bonus');
const Calculation = require('./Calculation');
const Lottery = require('./Lottery');
const Lotto = require('./Input/Lotto');
const Price = require('./Input/Price');
const LottoResult = require('./LottoResult');

class LottoProgram {
  price;

  lottery;

  bonus;

  calcLotto;

  lottoResult;

  start() {
    this.inputPrice();
  }

  inputPrice() {
    readLine(GAME_MESSAGE.input_price, this.getPrice.bind(this));
  }

  getPrice(answer) {
    this.price = new Price(answer);
    return this.publishLotto();
  }

  publishLotto() {
    const lottoCount = this.price.getLottoCount();
    this.lottery = new Lottery(lottoCount).pick().printList();

    return this.inputLotto();
  }

  inputLotto() {
    readLine(GAME_MESSAGE.input_win_number, this.getWinNumbers.bind(this));
  }

  getWinNumbers(answer) {
    this.lotto = new Lotto(answer);
    return this.inputBonus();
  }

  inputBonus() {
    readLine(GAME_MESSAGE.input_bonus_number, this.getBonusNumber.bind(this));
  }

  getBonusNumber(answer) {
    this.bonus = new Bonus(answer, this.lotto.getNumbers());
    return this.saveCalcClass();
  }

  saveCalcClass() {
    this.calcLotto = new Calculation();
    return this.calcLottoResult();
  }

  calcLottoResult() {
    const lottoList = this.lottery.getLottoList();
    const winNumberList = this.lotto.getNumbers();
    const bonusNumber = this.bonus.getBonusNumber();
    const lottoPrice = this.price.getLottoPrice();

    this.calcLotto
      .calcList(lottoList, winNumberList, bonusNumber)
      .calcLottoRate(lottoPrice);

    return this.saveResultClass();
  }

  saveResultClass() {
    const result = this.calcLotto.getWinResult();
    const rate = this.calcLotto.getRate();

    this.lottoResult = new LottoResult(result, rate);

    return this.printResult();
  }

  printResult() {
    this.lottoResult.printResult()
      .printRate();

    return close();
  }
}

module.exports = LottoProgram;
