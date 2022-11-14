const MissionUtils = require('@woowacourse/mission-utils');
let MONEY = 0; // 구입한 금액
const TICKETS = [];

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
          '[ERROR] 보너스 번호가 당첨 번호 중 중복되는 숫자입니다.',
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
    this.resultLottoPrint(rankCount);
  }
  // 통계 자료 만드는 메소드
  winningStatics(numbersCount, bonusCount, rankCount) {
    let tmp = [];
    tmp = rankCount;

    let count = numbersCount + bonusCount;
    if (count == 3) tmp[0] += 1;
    if (count == 4) tmp[1] += 1;
    if (count == 5) tmp[2] += 1;
    if (count == 6 && bonusCount == 1) tmp[3] += 1;
    if (count == 6 && bonusCount == 0) tmp[4] += 1;

    return tmp;
  }

  resultLottoPrint(rankCount) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rankCount[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rankCount[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rankCount[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCount[3]}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${rankCount[4]}개`,
    );
    this.revenueRatioPrint(MONEY, rankCount);
  }

  revenueRatioPrint(MONEY, rankCount) {
    let revenue = 0;
    let revenueRatio = 0;
    for (let i = 0; i < rankCount.length; i++) {
      if (i == 0) revenue += 5000 * rankCount[i];
      if (i == 1) revenue += 50000 * rankCount[i];
      if (i == 2) revenue += 1500000 * rankCount[i];
      if (i == 3) revenue += 30000000 * rankCount[i];
      if (i == 4) revenue += 2000000000 * rankCount[i];
    }
    revenueRatio = (revenue / MONEY) * 100;
    revenueRatio = Math.round(revenueRatio * 100) / 100;
    MissionUtils.Console.print(`총 수익률은 ${revenueRatio}%입니다.`);
    MissionUtils.Console.close();
  }
}

// 시작 메소드
function start() {
  MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위로 나누어 떨어져야 합니다.');
    }
    MONEY = money;
    buyTicket(money);
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
    MissionUtils.Console.print(`[${ticket.join(', ')}]`);
  }
  insertLottoNumber(tickets);
}

// 당첨번호 입력 메소드
function insertLottoNumber(tickets) {
  MissionUtils.Console.readLine('당첨번호를 입력해주세요.\n', (num) => {
    const lottoNumber = num.split(',').map((element) => parseInt(element));
    const lotto = new Lotto(lottoNumber, tickets);
  });
}

module.exports = { start, Lotto, buyTicket, insertLottoNumber };
