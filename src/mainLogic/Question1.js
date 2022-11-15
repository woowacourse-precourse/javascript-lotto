const MissionUtils = require("@woowacourse/mission-utils");
const Checker = require("../Utils/Checker");
const Ticket = require("../Utils/Ticket");
const Question2 = require("./Question2");
const Print = require("../Utils/Print");

class Question1 {
  start() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      const spendMoney = Number(answer);

      const ticket = new Ticket(spendMoney);
      const checker = new Checker();
      const print = new Print();

      checker.isCorrectMoney(spendMoney);

      const lottoTicket = ticket.number;
      print.printTicketCount(ticket.count);
      print.printLottoTicket(lottoTicket);

      const question2 = new Question2(lottoTicket, spendMoney);
    });
  }
}

module.exports = Question1;
