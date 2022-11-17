const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class Purchase {
  myTickets = [];
  purchaseAmount;
  numberOfTicket;

  constructor(num) {
    this.purchaseAmount = Number(num);
    this.numberOfTicket = this.purchaseAmount / 1000;
  }

  getHowManyLottos() {
    Console.print(`${this.numberOfTicket}개를 구매했습니다.`);
    this.publishLottos(this.numberOfTicket);
    this.printLottos();
    this.getWinningNumbers();
  }

  publishLottos(num) {
    while (this.myTickets.length < num) {
      this.myTickets.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }
  }

  printLottos() {
    this.myTickets.forEach((ticket) => {
      Console.print(
        `[${ticket[0]}, ${ticket[1]}, ${ticket[2]}, ${ticket[3]}, ${ticket[4]}, ${ticket[5]}]`
      );
    });
  }

  getWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      new Lotto(
        makeSixNumbersArr(numbers),
        this.myTickets,
        this.purchaseAmount
      );
    });
  }
}

const makeSixNumbersArr = (str) => {
  const arr = str.split(',');
  return arr.map((value) => Number(value));
};

module.exports = Purchase;
