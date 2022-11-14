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

  calcuLotto;

  lottoResult;

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
    this.lottery = new Lottery(lottoCount).pick().printList();

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
    return this.calcLottoResult();
  }

  calcLottoResult() {
    const lottoList = this.lottery.getLottoList();
    const winNumberList = this.lotto.getNumbers();
    const bonusNumber = this.bonus.getBonusNumber();
    const lottoPrice = this.price.getLottoPrice();

    this.calcuLotto = new Calculation();
    this.calcuLotto
      .calcList(lottoList, winNumberList, bonusNumber)
      .matchResult()
      .calcLottoRate(lottoPrice);

    return this.printResult();
  }

  printResult() {
    const result = this.calcuLotto.getWinResult();
    const rate = this.calcuLotto.getRate();

    this.lottoResult = new LottoResult(result, rate);
    this.lottoResult.printResult()
      .printRate();

    return close();
  }
}

module.exports = LottoProgram;
