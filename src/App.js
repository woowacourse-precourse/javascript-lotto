const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const RateOfReturnCalculator = require('./RateOfReturnCalculator');
const print = require('./utils/utils');
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constants');

class App {
  constructor() {
    this.countOfLotto;
    this.purchasedLottos = [];
    this.winningNumbers;
    this.bonusNumber;
    this.winningResult = [];
    this.countOfRanking = [null, 0, 0, 0, 0, 0];
    this.numberGenerator = new NumberGenerator();
  }

  play() {
    this.inputCash();
  }

  inputCash() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_CASH, (input) => {
      let lottoCounter = new LottoCounter(input);
      this.countOfLotto = lottoCounter.getCountOfLotto();

      this.makeLotto();
    });
  }

  makeLotto() {
    let num = this.countOfLotto;

    while (num !== 0) {
      let numbers = this.numberGenerator.createRandomSixNumbers();
      let newLotto = new Lotto(numbers);
      this.purchasedLottos.push(newLotto.getLottoNumbers());
      num -= 1;
    }

    this.printLottos();
  }

  printLottos() {
    print('');
    print(this.countOfLotto + MESSAGE.COUNT_OF_PURCHASED_LOTTOS);
    this.purchasedLottos.map((lotto) => {
      print(
        `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`
      );
    });
    print('');

    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_LOTTO_NUMBERS, (input) => {
      input = input.split(',').map((num) => Number(num));
      let newLotto = new Lotto(input);
      this.winningNumbers = newLotto.getLottoNumbers();

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      let newBonusNumber = new BonusNumber(Number(input), this.winningNumbers);
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
      this.countOfLotto
    );

    let rateOfReturn = calculator.getRateOfReturn();
    print(`총 수익률은 ${rateOfReturn}%입니다.`);

    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
