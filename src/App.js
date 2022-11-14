const MissionUtils = require('@woowacourse/mission-utils');
const TicketBox = require('./TicketBox');

class App {
  constructor() {
    this.ticket = {};
  }

  inputBudgetCallback(inputBudget) {
    this.ticket = new TicketBox(inputBudget);
    this.ticket.makeTickets();
    this.ticket.printTickets();
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
