const LottoCounter = require('./LottoCounter');
const NumberCreater = require('./NumberCreater');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const RateOfReturnCalculator = require('./RateOfReturnCalculator');
const { print, close, input, printLottoNumbers } = require('./utils/utils');
const {
  MESSAGE,
  WINNING_RESULT,
  FIRST_PLACE,
  SECOND_PLACE,
  FIFTH_PLACE,
} = require('./utils/constants');

class App {
  constructor() {
    this.lottosQuantity;
    this.purchasedLottos = [];
    this.winningNumbers;
    this.bonusNumber;
    this.winningResult = [];
    this.winningLottosQuantity = [null, 0, 0, 0, 0, 0];
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    input(MESSAGE.INPUT_CASH, (cash) => {
      this.setLottosQuantity(cash);
    });
  }

  setLottosQuantity(cash) {
    this.lottosQuantity = new LottoCounter(cash).getLottosQuantity();

    this.setPurchasedLottos();
  }

  setPurchasedLottos() {
    let count = this.lottosQuantity;

    while (count !== 0) {
      let numbers = new NumberCreater().createRandomSixNumbers();
      this.purchasedLottos.push(new Lotto(numbers).getLottoNumbers());
      count -= 1;
    }

    this.printLottosQuantity();
  }

  printLottosQuantity() {
    print('');
    print(this.lottosQuantity + MESSAGE.COUNT_OF_PURCHASED_LOTTOS);

    this.printLottos();
  }

  printLottos() {
    this.purchasedLottos.map((lotto) => {
      printLottoNumbers(lotto);
    });
    print('');

    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    input(MESSAGE.INPUT_LOTTO_NUMBERS, (numbers) => {
      this.setWinningNumbers(numbers);
    });
  }

  setWinningNumbers(numbers) {
    numbers = Array.from(numbers.split(','), (num) => Number(num));
    this.winningNumbers = new Lotto(numbers).getLottoNumbers();

    this.inputBonusNumber();
  }

  inputBonusNumber() {
    input(MESSAGE.INPUT_BONUS_NUMBER, (number) => {
      this.setBonusNumber(Number(number));
    });
  }

  setBonusNumber(number) {
    let newBonusNumber = new BonusNumber(number, this.winningNumbers);
    this.bonusNumber = newBonusNumber.getBonusNumber();

    this.setWinningResult();
  }

  setWinningResult() {
    this.purchasedLottos.forEach((lottoNumbers) => {
      let winningChecker = new WinningChecker(
        lottoNumbers,
        this.winningNumbers,
        this.bonusNumber
      );
      this.winningResult.push(winningChecker.getWinningRank());
    });

    this.countWinningLottos();
  }

  countWinningLottos() {
    this.winningResult.forEach((rank) => {
      this.winningLottosQuantity[rank] += 1;
    });

    this.printWinningResult();
  }

  printWinningResult() {
    print(MESSAGE.WINNING_HISTORY);

    for (let rank = FIFTH_PLACE.NUMBER; rank >= FIRST_PLACE.NUMBER; rank -= 1) {
      if (rank === SECOND_PLACE.NUMBER) {
        const RESULT = `${WINNING_RESULT[rank].LOTTO_COUNT}개 일치, 보너스 볼 일치 (${WINNING_RESULT[rank].PRIZE}) - ${this.winningLottosQuantity[rank]}개`;
        print(RESULT);
        continue;
      }
      const RESULT = `${WINNING_RESULT[rank].LOTTO_COUNT}개 일치 (${WINNING_RESULT[rank].PRIZE}) - ${this.winningLottosQuantity[rank]}개`;
      print(RESULT);
    }

    this.printRateOfReturn();
  }

  printRateOfReturn() {
    let rateOfReturn = new RateOfReturnCalculator(
      this.winningLottosQuantity,
      this.lottosQuantity
    ).getRateOfReturn();

    const RATE_OF_RETURN = `총 수익률은 ${rateOfReturn}%입니다.`;
    print(RATE_OF_RETURN);

    this.close();
  }

  close() {
    close();
  }
}

const app = new App();
app.play();

module.exports = App;
