const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  ticketing(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
    const numberOfTickets = money / 1000;
    const tickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      tickets.push(this.oneTicketNumbers());
      MissionUtils.Console.print(tickets[i]);
    }
  }

  oneTicketNumbers() {
    let oneTicket = [];
    for (let i = 0; i < 6; i++) {
      oneTicket.push(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return oneTicket;
  }
}

module.exports = Lotto;
