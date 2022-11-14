const { Console } = require('@woowacourse/mission-utils');
const UserBudget = require('./UserBudget');
const LottoMachine = require('./LottoMachine');
const Lotto = require('./Lotto');
const INPUT_BUDGET = '구입금액을 입력해 주세요.\n';

class App {
  budget;
  lottoTickets;
  lottoWinNumbers;

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
    this.budget = new UserBudget(Number(budget));
    this.lottoTickets = new LottoMachine(budget);
    this.getWinLottoNumbers();
  }

  getWinLottoNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
      const winNumber = input.split(',');
      this.lottoWinNumbers = new Lotto(winNumber);
      Console.print(this.lottoWinNumbers.join(''));
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
