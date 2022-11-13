const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.paymentCostStr = "";
  }

  paymentInput() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.", (answer) => {
      this.isCorrectRange(answer);
      this.lottoTicketPages();
      // MissionUtils.Console.print(this.makeTicket());
      this.makeTicket();
    });
  }
  isCorrectRange(number) {
    if (number % 1000 !== 0) {
      return MissionUtils.Console.print("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    console.log(`구입금액: ${number}`);
    this.paymentCostStr += number;
  }
  lottoIssuance() {
    return this.paymentCostStr / 1000;
  }
  lottoTicketPages() {
    const number = this.lottoIssuance();
    console.log(`${number}개를 구매했습니다.`);
  }

  makeRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }
  makeTicket() {
    let tickets = [];
    const number = this.lottoIssuance();
    const randomNumber = this.makeRandomLottoNumber();
    randomNumber.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < number; i++) {
      tickets.push(randomNumber);
    }
    // return tickets;
    return MissionUtils.Console.print(tickets);
  }

  // 오름차순
  sortFunction() {
    sort;
  }
  play() {
    this.paymentInput();
  }
}
const app = new App();
app.play();
module.exports = App;
