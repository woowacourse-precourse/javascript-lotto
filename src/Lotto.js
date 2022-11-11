const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers; // 얘는 당첨번호임

  constructor(numbers, tickets) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.insertBonusNumber(this.#numbers, tickets);
  }
  validate(numbers) {
    if (numbers.length != 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const set = new Set(numbers);
    if (set.size != 6) {
      throw new Error('[ERROR] 중복되는 숫자가 없어야 합니다.');
    }
    for (let num of numbers) {
      if (num <= 0 || num >= 46) {
        throw new Error('[ERROR] 당첨번호는 1~45 까지의 숫자만 가능합니다.');
      }
    }
  }
  insertBonusNumber(numbers, tickets) {
    MissionUtils.Console.readLine('보너스번호를 입력해주세요.\n', (num) => {
      const bonusNumber = parseInt(num);
      if (numbers.includes(bonusNumber)) {
        throw new Error(
          '[ERROR] 보너스 번호가 당첨 번호 중 중복되는 숫자입니다.'
        );
      }
      if (bonusNumber <= 0 || bonusNumber >= 46) {
        throw new Error('[ERROR] 보너스번호는 1~45 까지의 숫자만 가능합니다.');
      }
      this.ticketCheck(numbers, bonusNumber, tickets);
    });
  }

  // 각 티켓당 당첨 번호 확인 메소드
  ticketCheck(numbers, bonusNumber, tickets) {
    let rankCount = [0, 0, 0, 0, 0];
    for (let ticket of tickets) {
      let numbersCount = 0;
      let bonusCount = 0;
      for (let num of ticket) {
        if (numbers.includes(num)) {
          numbersCount += 1;
        }
        if (num == bonusNumber) {
          bonusCount += 1;
        }
      }
      rankCount = this.winningStatics(numbersCount, bonusCount, rankCount);
    }
    this.test(rankCount);
  }

  test(tmp) {
    MissionUtils.Console.print('test');
    MissionUtils.Console.print(tmp);
  }
  // 통계 자료 만드는 메소드
  winningStatics(numbersCount, bonusCount, rankCount) {
    let tmp = [];
    tmp = rankCount;
    MissionUtils.Console.print(numbersCount);
    MissionUtils.Console.print(bonusCount);

    let count = numbersCount + bonusCount;
    if (count == 3) tmp[0] += 1;
    if (count == 4) tmp[1] += 1;
    if (count == 5) tmp[2] += 1;
    if (count == 6 && bonusCount == 1) tmp[3] += 1;
    if (count == 6) tmp[4] += 1;

    return tmp;
  }
}

// 당첨번호 입력 메소드
function insertLottoNumber(tickets) {
  MissionUtils.Console.readLine('당첨번호를 입력해주세요.\n', (num) => {
    const lottoNumber = num.split(',').map((element) => parseInt(element));
    const lotto = new Lotto(lottoNumber, tickets);
  });
}

// 로또 구입 메소드
function buyTicket(money) {
  const numberOfTicket = money / 1000;
  MissionUtils.Console.print(`${numberOfTicket}개를 구매했습니다.`);

  const tickets = []; // 티켓 개수에 맞게끔 하나의 리스트에 각각의 티켓을 저장
  for (let i = 0; i < numberOfTicket; i++) {
    const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    ticket.sort((a, b) => a - b);
    tickets[i] = ticket;
    MissionUtils.Console.print(ticket);
  }
  insertLottoNumber(tickets);
}

// 시작 메소드
function start() {
  MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위로 나누어 떨어져야 합니다.');
    }
    buyTicket(money);
  });
}

module.exports = { start, Lotto };
