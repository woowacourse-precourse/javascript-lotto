const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Statistics = require("./Statistics.js");
class App {
  constructor() {
    this.paymentCostStr = "";
    this.randomNumber = [];
    this.winningNumber = 0;
    this.bonus = 0;
  }

  paymentInput() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.", (answer) => {
      this.isCorrectRange(answer);
      this.lottoTicketPages();
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
    for (let i = 0; i < number; i++) {
      const randomNumber = this.makeRandomLottoNumber();
      randomNumber.sort((a, b) => {
        return a - b;
      });
      tickets.push(randomNumber);
    }
    this.randomNumber = tickets;
    MissionUtils.Console.print(`[${tickets.join(", ")}]`);
    this.getWinningNumber();
  }

  getWinningNumber() {
    let WINNING_NUMBER = 0;
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (number) => {
      MissionUtils.Console.print(number);
      WINNING_NUMBER = number.split(",");
      const lotto = new Lotto(WINNING_NUMBER);
      lotto.validate(WINNING_NUMBER);
      this.winningNumber = WINNING_NUMBER;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    let BONUS_NUMBER = 0;
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (number) => {
      BONUS_NUMBER = number;
      this.bonus = BONUS_NUMBER;
      this.validateRange(BONUS_NUMBER);
      MissionUtils.Console.print(BONUS_NUMBER);
      MissionUtils.Console.close();
      this.printWord();
    });
  }

  validateRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45사이의 숫자여야 합니다.");
    }
  }

  printWord() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    this.showResult();
    this.showRate();
  }

  showRate() {
    const payment = this.paymentCostStr;
    const result = this.statistics();
    MissionUtils.Console.print(`총 수익률은 ${(result / payment) * 100}%입니다.`);
  }

  statistics() {
    let RESULT = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    for (let lotto of this.randomNumber) {
      const match = new Statistics(lotto, this.winningNumber, this.bonus);
      RESULT[match.checkMatch()] += 1;
    }
    return this.showResult(RESULT);
  }

  showResult(result) {
    let MONEY = 0;
    result = Object.entries(result);
    for (let key of result) {
      if (key[0] === "undefined") {
        continue;
      }
      this.matchResult(key);
      MONEY += this.total(key);
    }
    return MONEY;
  }

  matchResult(key) {
    switch (key[0]) {
      case "5":
        return MissionUtils.Console.print(`3개일치 (5,000원) - ${key[1]}개`);
      case "4":
        return MissionUtils.Console.print(`4개일치 (5,0000원) - ${key[1]}개`);
      case "3":
        return MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${key[1]}개`);
      case "2":
        return MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${key[1]}개`);
      case "1":
        return MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${key[1]}개`);
    }
  }
  total(key) {
    if (key[1] === 0) {
      return 0;
    }
    return this.totalResult(key);
  }
  totalResult(key) {
    switch (key[0]) {
      case "5":
        return 5000;
      case "4":
        return 50000;
      case "3":
        return 1500000;
      case "2":
        return 30000000;
      case "1":
        return 2000000000;
    }
  }

  play() {
    this.paymentInput();
  }
}
const app = new App();
app.play();
module.exports = App;
