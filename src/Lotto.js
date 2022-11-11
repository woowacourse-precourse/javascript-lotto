const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers; // 얘는 당첨번호임

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
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
    this.test();
  }
  test() {
    MissionUtils.Console.print('test');
  }
}

// 당첨번호 입력 메소드
function insertLottoNumber() {
  MissionUtils.Console.readLine('당첨번호를 입력해주세요.\n', (num) => {
    const lottoNumber = num.split(',').map((element) => parseInt(element));
    MissionUtils.Console.print(lottoNumber);
    const lotto = new Lotto(lottoNumber);
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
  insertLottoNumber();
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
