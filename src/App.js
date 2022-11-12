const { GAME_MESSAGE, PRICE_MEASURE } = require('./lib/Constants');
const { print, readLine, pickUniqueNumbersInRange } = require('./lib/Utils');
const PriceValidation = require('./Validation/PriceValidation');
const WinNumbersValidation = require('./Validation/WinNumbersValidation');

class App {
  lottoPrice = 0;

  lottoCount = 0;

  lottoList = [];

  winNumberList = [];

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

    return this.printLottoList();
  }

  printLottoList() {
    this.lottoList.forEach((lotto) => {
      const lottoMessage = App.getLottoPrintMessage(lotto);
      print(lottoMessage);
    });

    print('\n');

    return this.inputWinNumbers();
  }

  static getLottoPrintMessage(lotto = []) {
    const { length } = lotto;
    let message = '';
    const open = '[';
    const close = ']';

    lotto.forEach((number, index) => {
      if (index === 0 || index === length) {
        message += number;
        return;
      }
      message += `, ${number}`;
    });

    return open + message + close;
  }

  inputWinNumbers() {
    readLine(GAME_MESSAGE.input_win_number, (answer) => this.getWinNumbers(answer));
  }

  getWinNumbers(answer) {
    App.winNumberValidate(answer);
    this.saveWinNumbers(answer);
  }

  static winNumberValidate(answer) {
    const winNumberValidate = new WinNumbersValidation(answer);
    return winNumberValidate.validate();
  }

  saveWinNumbers(answer) {
    const winNumberArray = answer.split(',');
    this.winNumberList = winNumberArray.map((number) => Number(number));

    print('\n');

    return this.inputBonusNumber();
  }

  inputBonusNumber() {
    readLine(GAME_MESSAGE.input_bonus_number, (answer) => this.getBonusNumber(answer));
  }

  getBonusNumber(answer) {
    // TODO
    // 보너스 번호 관련 유효성 검사
    // 맴버변수에 금액 저장
  }
}

const app = new App();
app.play();

module.exports = App;
