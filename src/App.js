const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  tickets = [];

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
      this.ticketing(money);
      MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (win) => {
        const lotto = new Lotto(win);
        lotto.validate(win);
      });
    });
  }

  getWinningNumbers() {}

  ticketing(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
    const numberOfTickets = money / 1000;

    MissionUtils.Console.print(`\n${numberOfTickets}개를 구매했습니다.`);
    for (let i = 0; i < numberOfTickets; i++) {
      this.tickets.push(this.issueOneTicket());
      MissionUtils.Console.print(this.tickets[i]);
    }
  }

  issueOneTicket() {
    let oneTicket = [];
    for (let i = 0; i < 6; i++) {
      oneTicket.push(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return oneTicket;
  }
}

const test = new App();
test.play();

module.exports = App;
