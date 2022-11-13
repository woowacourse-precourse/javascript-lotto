const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const RateOfReturnCalculator = require('./RateOfReturnCalculator');
const {
  print,
  close,
  input,
  printCountOfLottos,
  printLottoNumbers,
} = require('./utils/utils');
const { MESSAGE } = require('./utils/constants');

class App {
  constructor() {
    this.countOfLottos;
    this.purchasedLottos = [];
    this.winningNumbers;
    this.bonusNumber;
    this.winningResult = [];
    this.countOfRanking = [null, 0, 0, 0, 0, 0];
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    input(MESSAGE.INPUT_CASH, (cash) => {
      this.findCountOfLottos(cash);
    });
  }

  findCountOfLottos(cash) {
    this.countOfLottos = new LottoCounter(cash).getCountOfLotto();

    this.createLottos();
  }

  createLottos() {
    let count = this.countOfLottos;

    while (count !== 0) {
      let numbers = new NumberGenerator().createRandomSixNumbers();
      this.purchasedLottos.push(new Lotto(numbers).getLottoNumbers());
      count -= 1;
    }

    this.printCountOfLottos();
  }

  printCountOfLottos() {
    printCountOfLottos(this.countOfLottos);

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
      numbers = numbers.split(',').map((num) => Number(num));
      let newLotto = new Lotto(numbers);
      this.winningNumbers = newLotto.getLottoNumbers();

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    input(MESSAGE.INPUT_BONUS_NUMBER, (number) => {
      let newBonusNumber = new BonusNumber(Number(number), this.winningNumbers);
      this.bonusNumber = newBonusNumber.getBonusNumber();

      this.checkWinning();
    });
  }

  checkWinning() {
    this.purchasedLottos.forEach((lottoNumbers) => {
      let checkWinner = new WinningChecker(
        lottoNumbers,
        this.winningNumbers,
        this.bonusNumber
      );
      this.winningResult.push(checkWinner.getWinningRank());
    });

    this.countWinningRank();
  }

  countWinningRank() {
    this.winningResult.forEach((result) => {
      this.countOfRanking[result] += 1;
    });

    this.printWinningResult();
  }

  printWinningResult() {
    print(MESSAGE.WINNING_HISTORY);
    print(MESSAGE.INFO_OF_FIFTH_PLACE + `${this.countOfRanking[5]}개`);
    print(MESSAGE.INFO_OF_FOURTH_PLACE + `${this.countOfRanking[4]}개`);
    print(MESSAGE.INFO_OF_THIRD_PLACE + `${this.countOfRanking[3]}개`);
    print(MESSAGE.INFO_OF_SECOND_PLACE + `${this.countOfRanking[2]}개`);
    print(MESSAGE.INFO_OF_FIRST_PLACE + `${this.countOfRanking[1]}개`);

    this.printRateOfReturn();
  }

  printRateOfReturn() {
    let calculator = new RateOfReturnCalculator(
      this.countOfRanking,
      this.countOfLottos
    );

    let rateOfReturn = calculator.getRateOfReturn();
    print(`총 수익률은 ${rateOfReturn}%입니다.`);

    this.close();
  }

  close() {
    close();
  }
}

const app = new App();
app.play();

module.exports = App;
