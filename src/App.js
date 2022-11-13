const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const RateOfReturnCalculator = require('./RateOfReturnCalculator');
const { print, close, input, printCountOfLottos } = require('./utils/utils');
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
    let num = this.countOfLottos;

    while (num !== 0) {
      let numbers = new NumberGenerator().createRandomSixNumbers();
      this.purchasedLottos.push(new Lotto(numbers).getLottoNumbers());
      num -= 1;
    }

    this.printLottos();
  }

  printLottos() {
    print('');
    printCountOfLottos(this.countOfLottos);
    this.purchasedLottos.map((lotto) => {
      print(
        `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`
      );
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
