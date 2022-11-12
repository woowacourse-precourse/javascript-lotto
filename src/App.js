const { GAME_MESSAGE, PRICE_MEASURE } = require('./lib/Constants');
const { print, readLine } = require('./lib/Utils');
const PriceValidation = require('./Validation/PriceValidation');

class App {
  lottoPrice = 0;

  lottoCount = 0;

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
  }
}

const app = new App();
app.play();

module.exports = App;
