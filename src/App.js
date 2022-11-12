const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  myTickets = [];

  play() {
    Console.readLine('구입금액을 입력해주세요.', (num) => {
      if (isDivisibleBy1000(num)) {
        this.getHowManyLottos(num);
      } else {
        errorMessage();
      }
    });
  }

  getHowManyLottos(money) {
    const numberOfTicket = money / 1000;

    Console.print(`${numberOfTicket}개를 구매했습니다.`);

    this.publishLottos(numberOfTicket);
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

  getWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      new Lotto(makeSixNumbersArr(numbers), this.myTickets);
    });
  }

  printLottos() {
    this.myTickets.forEach((ticket) => {
      Console.print(ticket);
    });
  }
}

const makeSixNumbersArr = (str) => {
  const arr = str.split(',');
  return arr.map((value) => Number(value));
};

const isDivisibleBy1000 = (num) => {
  if (num % 1000 === 0) {
    return true;
  }
  return false;
};

const errorMessage = () => {
  throw new Error('[ERROR] 1000원 단위로 금액을 입력해주세요.');
};

const app = new App();
app.play();

module.exports = App;
