const { Console } = require('@woowacourse/mission-utils');
const UserBudget = require('./UserBudget');
const INPUT_BUDGET = '구입금액을 입력해 주세요.';

class App {
  budget;

  play() {
    this.getUserBudget(INPUT_BUDGET, this.validateUserBudget);
  }

  getUserBudget(INPUT_BUDGET, validateUserBudget) {
    Console.readLine(INPUT_BUDGET, validateUserBudget);
  }

  validateUserBudget(input) {
    this.budget = new UserBudget(Number(input));
  }
}

const app = new App();
app.play();

module.exports = App;
