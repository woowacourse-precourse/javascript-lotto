const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const CheckError = require('./CheckError');
const MESSAGE = require('./utils/constants');
const RandomNumbers = require('./RandomNumbers');

class App {
  constructor() {
    this.lottoList = [];
    this.numberOfWins = [0, 0, 0, 0, 0];
  }

  play() {
    Console.readLine(MESSAGE.PURCHASE_AMOUT, (amount) => {
      this.#checkPurchaseError(amount);
      this.amount = amount;
      this.#lottoPurchase(amount);
      this.#inputlottoWinnerNumber();
    });
  }

  #checkPurchaseError(amount) {
    if (isNaN(amount))
      throw new Error('[ERROR] 입력받은 값은 숫자여야 합니다.');
  }

  #lottoPurchase() {
    const lottoNumber = parseInt(this.amount / 1000);

    this.print(`${lottoNumber}개를 구매했습니다.`);
    for (let i = 0; i < lottoNumber; i++) {
      const lotto = new Lotto(RandomNumbers.generate());
      this.lottoList.push(lotto);
    }
  }

  #inputlottoWinnerNumber() {
    Console.readLine(MESSAGE.WINNING_NUMBER, (numbers) => {
      this.#parsingStringToArray(numbers);
      this.#inputlottoBonusNumber();
    });
  }

  #inputlottoBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.lottoBonusNumber = bonusNumber;
      this.#checkLottoResult();
    });
  }

  #parsingStringToArray(numbers) {
    this.lottoWinnerNumber = numbers.split(',').map(Number);
    CheckError.check(this.lottoWinnerNumber);
  }

  #checkLottoResult() {
    this.lottoList.map((lottery) => {
      const numberOfSuccess = lottery.matchLottoNumber(
        this.lottoWinnerNumber,
        this.lottoBonusNumber,
      );

      if (numberOfSuccess !== -1) {
        this.numberOfWins[numberOfSuccess]++;
      }
    });
  }

  print(message) {
    Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
