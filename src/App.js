const { GAME_MESSAGE, PRICE_MEASURE } = require('./lib/Constants');
const { print, readLine, pickUniqueNumbersInRange } = require('./lib/Utils');
const PriceValidation = require('./Validation/PriceValidation');
const WinNumbersValidation = require('./Validation/WinNumbersValidation');
const BonusNumberValidation = require('./Validation/BonusNumberValidation');

class App {
  lottoPrice = 0;

  lottoCount = 0;

  lottoList = [];

  winNumberList = [];

  bonusNumber = 0;

  lottoWinPrice = 0;

  lottoRate = 0;

  lottoResult = {
    three: {
      count: 0,
      text: GAME_MESSAGE.result_three_match,
      price: 5000,
    },
    four: {
      count: 0,
      text: GAME_MESSAGE.result_four_match,
      price: 50000,
    },
    five: {
      count: 0,
      text: GAME_MESSAGE.result_five_match,
      price: 1500000,
    },
    bonus: {
      count: 0,
      text: GAME_MESSAGE.result_five_bonus_match,
      price: 30000000,
    },
    six: {
      count: 0,
      text: GAME_MESSAGE.result_six_match,
      price: 2000000000,
    },
  };

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
    App.bonusNumberValidate(answer, this.winNumberList);
    this.saveBonusNumber(answer);
  }

  static bonusNumberValidate(answer, winNumberList) {
    const bonusNumberValidate = new BonusNumberValidation(answer, winNumberList);
    return bonusNumberValidate.validate();
  }

  saveBonusNumber(answer) {
    this.bonusNumber = Number(answer);
    return this.calculationLottoResult();
  }

  calculationLottoResult() {
    this.lottoList.forEach((lotto) => this.matchLottoNumber(lotto));
  }

  matchLottoNumber(lotto) {
    const isBonusMatch = !!lotto.filter((number) => number === this.bonusNumber).length;
    const matchLottoNumber = lotto.filter((number) => this.winNumberList.includes(number));
    const { length } = matchLottoNumber;
    const matchCount = (isBonusMatch ? 1 : 0) + length;

    return this.matchResult(matchCount, isBonusMatch);
  }

  matchResult(matchCount, isBonusMatch) {
    if (isBonusMatch && matchCount === 5) {
      this.lottoResult.bonus.count += 1;
      this.lottoWinPrice += this.lottoResult.bonus.price;
      return true;
    }

    switch (matchCount) {
      case 3:
        this.lottoResult.three.count += 1;
        this.lottoWinPrice += this.lottoResult.three.price;
        break;
      case 4:
        this.lottoResult.four.count += 1;
        this.lottoWinPrice += this.lottoResult.four.price;
        break;
      case 5:
        this.lottoResult.five.count += 1;
        this.lottoWinPrice += this.lottoResult.five.price;
        break;
      case 6:
        this.lottoResult.six.count += 1;
        this.lottoWinPrice += this.lottoResult.six.price;
        break;
      default:
        return false;
    }

    return this.calculationLottoRate();
  }

  calculationLottoRate() {
    const rate = (this.lottoWinPrice / this.lottoPrice) * 100;
    this.lottoRate = rate;

    return this.printResult();
  }

  printResult() {
    print('\n당첨 통계');
    print('---\n');

    Object.keys(this.lottoResult).forEach((key) => {
      const value = this.lottoResult[key];
      return print(`${value.text}${value.count}개`);
    });

    print(`총 수익률은 ${this.lottoRate}%입니다.`);
    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
