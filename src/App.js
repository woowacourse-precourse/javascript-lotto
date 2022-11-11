const { Console } = require('@woowacourse/mission-utils');
const UserBudget = require('./UserBudget');
const INPUT_BUDGET = '구입금액을 입력해 주세요.';

class App {
  budget;

  play() {
    this.getUserBudget(INPUT_BUDGET);
  }

  getUserBudget(INPUT_BUDGET) {
    Console.readLine(INPUT_BUDGET, (input) => {
      this.validateUserBudget(input);
    });
  }

  validateUserBudget(budget) {
    this.budget = new UserBudget(Number(budget));
  }
}

const app = new App();
app.play();

module.exports = App;
