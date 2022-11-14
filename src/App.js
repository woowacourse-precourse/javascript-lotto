const MissionUtils = require('@woowacourse/mission-utils');
const TicketBox = require('./TicketBox');

class App {
  constructor() {
    this.ticket = {};
  }
  inputBudgetCallback(input) {
    const inputBudget = parseInt(input, 10);
    this.ticket = new TicketBox(inputBudget);
    console.log(this.ticket.budget);
    MissionUtils.Console.close();
  }

  play() {
    MissionUtils.Console.readLine(
      '구입금액을 입력해 주세요.\n',
      this.inputBudgetCallback.bind(this),
    );
  }
}

const app = new App();
app.play();

module.exports = App;
