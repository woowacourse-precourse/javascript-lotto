const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  tickets = [];

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
      this.ticketing(money);
      MissionUtils.Console.readLine(
        '\n당첨 번호를 입력해 주세요.\n',
        (winningNumber) => {
          winningNumber = winningNumber.split(',');

          const lotto = new Lotto(winningNumber);

          lotto.validate(winningNumber);
          lotto.getBonusNumber(this.tickets, winningNumber, money);
        }
      );
    });
  }

  ticketing(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
    const numberOfTickets = money / 1000;

    MissionUtils.Console.print(`\n${numberOfTickets}개를 구매했습니다.`);
    for (let i = 0; i < numberOfTickets; i++) {
      this.tickets.push(this.issueOneTicket().sort((a, b) => a - b));
      MissionUtils.Console.print(this.tickets[i]);
    }
  }

  issueOneTicket() {
    let oneTicket = [];
    for (let i = 0; i < 6; i++) {
      let tmp = MissionUtils.Random.pickNumberInRange(1, 45);
      if (oneTicket.includes(tmp)) i--;
      else oneTicket.push(tmp);
    }
    return oneTicket;
  }
}

module.exports = App;
