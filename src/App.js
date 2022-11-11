const { Console } = require('@woowacourse/mission-utils');

const GameTools = require('./GameTools');
const Lotto = require('./Lotto');
const Render = require('./Render');
const Validator = require('./Validator');
const { LOTTO, MESSAGE } = require('./constants');

class App {
  constructor() {
    this.lotto;
    this.lottoCount;
    this.userLottos;
    this.bonusNumber;
    this.winningState = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.askBuget();
  }

  askBuget() {
    Console.print(MESSAGE.ASK_BUDGET);
    Console.readLine(MESSAGE.NULL, (money) => {
      Validator.throwErrorIfInvalidMoney(money);
      this.lottoCount = money / LOTTO.PRICE;

      this.issueLotto();
    });
  }

  issueLotto() {
    this.userLottos = GameTools.issueLottoAsManyAsCount(this.lottoCount);
    this.renderIssuedLottoList();
  }

  renderIssuedLottoList() {
    Render.issuedLottoList(this.lottoCount, this.userLottos);
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    Console.print(MESSAGE.ASK_WINNING_NUM);
    Console.readLine(MESSAGE.NULL, (inputValue) => {
      Validator.throwErrorIfInvalidFormOfWinningNumber(inputValue);
      const winningNumbers = inputValue
        .split(LOTTO.SPLIT_WITH)
        .map((num) => Number(num));
      this.lotto = new Lotto(winningNumbers);

      this.getBonusNumber(winningNumbers);
    });
  }

  getBonusNumber(winningNumbers) {
    Console.print(MESSAGE.ASK_BONUS_NUMBER);
    Console.readLine(MESSAGE.NULL, (bonusNumber) => {
      Validator.throwErrorIfInvalidBonusNumber(winningNumbers, bonusNumber);
      // this.bonusNumber = Number(bonusNumber);
      // this.setPrizeResult();
      this.checkGameResult(bonusNumber);
    });
  }

  printWinningStatistics(bonusNumber) {
    this.lotto.statusOfPrize(this.userLottos, bonusNumber, this.winningState);
    this.exitGame();
  }

  // setPrizeResult() {
  //   this.prizeResult = this.lotto.prizeResult(
  //     this.userLottos,
  //     this.bonusNumber,
  //     this.prizeResult
  //   );
  //   this.getTotalEarningRate();
  // }

  // getTotalEarningRate() {
  //   const rateOfReturn = GameTools.calcRateOfReturn(
  //     this.prizeResult,
  //     this.lottoCount
  //   );
  //   this.printStatistics(rateOfReturn);
  // }

  // printStatistics(rateOfReturn) {
  //   Render.WinningStatistics(this.prizeResult, rateOfReturn);
  //   this.exitGame();
  // }

  // exitGame() {
  //   Console.close();
  // }
}

const app = new App();
app.play();

module.exports = App;
