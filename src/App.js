const { Console } = require('@woowacourse/mission-utils');
const UserBudget = require('./UserBudget');
const LottoMachine = require('./LottoMachine');
const Lotto = require('./Lotto');
const LottoBonus = require('./LottoBonus');
const INPUT_BUDGET = '구입금액을 입력해 주세요.\n';

class App {
  userBudget;
  lottoTickets;
  lottoWinNumbers;
  lottoBonusNumber;

  play() {
    this.getUserBudget();
  }

  printSpaceLine() {
    Console.print('');
  }

  getUserBudget() {
    Console.readLine(INPUT_BUDGET, (input) => {
      this.validateUserBudget(input);
      this.printSpaceLine();
    });
  }

  validateUserBudget(budget) {
    this.userBudget = new UserBudget(Number(budget));
    this.lottoTickets = new LottoMachine(budget);
    this.getWinLottoNumbers();
  }

  getWinLottoNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
      const winNumber = input.split(',');
      this.validateIsNotNumber(winNumber);
      this.lottoWinNumbers = new Lotto(winNumber);
      this.printSpaceLine();
      this.getLottoBonusNumber();
    });
  }

  getLottoBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      this.validateIsNotNumber(input);
      this.lottoBonusNumber = new LottoBonus(Number(input));
      this.lottoWinNumbers.compareWithWinNumbers(input);
      this.printSpaceLine();
      this.getLottoResult();
    });
  }

  getLottoResult() {
    const lottoWinResult = this.lottoWinNumbers.checkLottoWinResult(
      this.lottoTickets.userBuyedTickets,
      this.lottoBonusNumber.number
    );
    const earningsRate = this.lottoWinNumbers.calculrateEarningsRate(
      this.userBudget.budget,
      this.lottoWinNumbers.calculratePrizeMoney(lottoWinResult)
    );

    this.printLottoResult(this.lottoWinNumbers.printLottoStatistics(lottoWinResult, earningsRate));
  }

  validateIsNotNumber(number) {
    for (let i = 0; i < number.length; i++) {
      if (isNaN(...number[i])) {
        throw new Error('[ERROR] 당첨 번호는 숫자만 입력해야 합니다.');
      }
    }
  }

  printLottoResult(result) {
    if (Array.isArray(result)) {
      result.forEach((str) => {
        Console.print(str);
      });
      return null;
    }
    MissionUtils.Console.print(result);
  }
}

const app = new App();
app.play();

module.exports = App;
