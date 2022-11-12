const LottoCounter = require('./LottoCounter');
const NumberGenerator = require('./NumberGenerator');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const WinningChecker = require('./WinningChecker');
const RateOfReturnCalculator = require('./RateOfReturnCalculator');
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, NUMBER } = require('./utils/constants');

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
    MissionUtils.Console.print('');
    MissionUtils.Console.print(
      this.countOfLotto + MESSAGE.COUNT_OF_PURCHASED_LOTTOS
    );
    this.purchasedLottos.map((lotto) => MissionUtils.Console.print(lotto));
    MissionUtils.Console.print('');

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
    MissionUtils.Console.print('\n당첨 통계\n---');
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.countOfRanking[5]}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.countOfRanking[4]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.countOfRanking[3]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countOfRanking[2]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.countOfRanking[1]}개`
    );

    this.printRateOfReturn();
  }

  printRateOfReturn() {
    let calculator = new RateOfReturnCalculator(
      this.countOfRanking,
      this.countOfLotto
    );

    let rateOfReturn = calculator.getRateOfReturn();
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);

    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
