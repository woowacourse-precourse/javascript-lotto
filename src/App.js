const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const CheckError = require('./CheckError');
const { MESSAGE, PRIZE_MONEY } = require('./utils/constants');
const RandomNumbers = require('./RandomNumbers');

class App {
  constructor() {
    this.amount = 0;
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
      const randomNumber = RandomNumbers.generate();
      this.printLottoNumber(randomNumber);
      const lotto = new Lotto(randomNumber);
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
      CheckError.bonusNumberCheck(Number(bonusNumber), this.lottoWinnerNumber);
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

    this.printRank();
    this.prizeCalculation();
  }

  prizeCalculation() {
    const reward = this.numberOfWins.reduce((acc, cur, i) => {
      acc += cur * PRIZE_MONEY[i];
      return acc;
    }, 0);

    const lottoYield = (reward * 100) / this.amount;

    this.printYield(Math.round(lottoYield * 10) / 10);
    Console.close();
  }

  print(message) {
    Console.print(message);
  }

  printRank() {
    this.print(MESSAGE.PRINT_RANK_TITLE);
    this.print('---');
    this.print(MESSAGE.THREE_MATCHES + `${this.numberOfWins[4]}개`);
    this.print(MESSAGE.FOUR_MATCHES + `${this.numberOfWins[3]}개`);
    this.print(MESSAGE.FIVE_MATCHES + `${this.numberOfWins[2]}개`);
    this.print(MESSAGE.FIVE_BONUS_MATCHES + `${this.numberOfWins[1]}개`);
    this.print(MESSAGE.SIX_MATCHES + `${this.numberOfWins[0]}개`);
  }

  printYield(lottoYield) {
    this.print(`총 수익률은 ${lottoYield}%입니다.`);
  }

  printLottoNumber(randomNumber) {
    let tmpString = '[';
    randomNumber.map((number) => (tmpString += number + ', '));
    const randomNumberString = tmpString.slice(0, -2) + ']';

    Console.print(randomNumberString);
  }
}

const app = new App();
app.play();

module.exports = App;
