const { GAME_MESSAGE, PRICE_MEASURE } = require('./lib/Constants');
const { print, readLine, pickUniqueNumbersInRange } = require('./lib/Utils');
const PriceValidation = require('./Validation/PriceValidation');

class App {
  lottoPrice = 0;

  lottoCount = 0;

  lottoList = [];

  play() {
    readLine(GAME_MESSAGE.input_price, (answer) => this.getLottoPrice(answer));
  }

  getLottoPrice(answer) {
    App.lottoPriceValidate(answer);
    this.saveLottoPriceAndCount(answer);
  }

  static lottoPriceValidate(answer) {
    const priceValidation = new PriceValidation(answer);
    return priceValidation.validate();
  }

  saveLottoPriceAndCount(answer) {
    this.lottoPrice = Number(answer);
    this.lottoCount = this.lottoPrice / PRICE_MEASURE;

    return this.printLottoCount();
  }

  printLottoCount() {
    print(`\n${this.lottoCount}개를 구매했습니다.`);
    return this.publishLottos();
  }

  publishLottos() {
    const lottos = [];
    for (let index = 0; index < this.lottoCount; index += 1) {
      const lotto = pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(lotto.sort((a, b) => a - b));
    }

    this.lottoList = lottos;
  }
}

const app = new App();
app.play();

module.exports = App;
