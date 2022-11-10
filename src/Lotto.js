const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers; // 얘는 당첨번호임

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  // 시작 메소드
  start() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
      if (money % 1000 != 0) {
        throw new Error('[ERROR] 1,000원 단위로 나누어 떨어져야 합니다.');
      }
      this.buyTicket(money);
    });
  }

  // 로또 구입 메소드
  buyTicket(money) {
    const numberOfTicket = money / 1000;
    MissionUtils.Console.print(`${numberOfTicket}개를 구매했습니다.`);

    let tickets = []; // 티켓 개수에 맞게끔 하나의 리스트에 각각의 티켓을 저장
    for (let i = 0; i < numberOfTicket; i++) {
      let ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket.sort(function (a, b) {
        return a - b;
      });
      tickets[i] = ticket;
      MissionUtils.Console.print(ticket);
    }
  }
}

module.exports = Lotto;
