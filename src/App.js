const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.randomLottoNums = [];
    this.correctLottoNums = [];
    this.bonusNumber = 0;
    this.earningRate = 0;
    this.input = 0;
    this.rank = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      this.input = Number(input);
      if (isNaN(this.input)) throw new Error("[ERROR] 숫자를 입력해주세요.");
      if (this.input % 1000 !== 0)
        throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 합니다.");

      const lottoCount = this.input / 1000;
      Console.print(`${lottoCount}개를 구매했습니다.`);

      this.randomLottoNums = Array(lottoCount)
        .fill([])
        .map(() => {
          const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
            (a, b) => a - b,
          );
          Console.print(lottoNum);
          return lottoNum;
        });

      this.getCorrectLottoNums();
    });
  }

  getCorrectLottoNums() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.correctLottoNums = input
        .split(",")
        .map(Number)
        .sort((a, b) => a - b);
      if (this.correctLottoNums.length !== 6)
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

      this.getBonusLottoNums();
    }); // ,로 구분
  }

  getBonusLottoNums() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.bonusNumber = Number(input);
      this.getEarningRate();
    });
  }

  getEarningRate() {
    Console.print("당첨 통계");
    Console.print("---");
    console.log(this.randomLottoNums, "randomLottoNums");

    for (const numbers of this.randomLottoNums) {
      let correctCount = 0;

      for (let i = 0; i < 5; i++) {
        if (numbers[i] === this.correctLottoNums[i]) correctCount++;
      }
      console.log(numbers, this.correctLottoNums, correctCount, "!@!@");
      if (correctCount > 2) {
        this.rank[
          `${this.getRank(correctCount, numbers.includes(this.bonusNumber))}`
        ] += 1;
      }
      console.log(this.rank, "rank");
    }

    const totalEarning = Object.entries(this.rank).reduce((acc, cur) => {
      const [rank, count] = cur;
      let price = 0;
      switch (rank) {
        case "1":
          price += count * 2000000000;
          break;
        case "2":
          price += count * 30000000;
          break;
        case "3":
          price += count * 1500000;
          break;
        case "4":
          price += count * 50000;
          break;
        case "5":
          price += count * 5000;
          break;
      }
      return (acc += price);
    }, 0);

    this.earningRate = (totalEarning / this.input).toFixed(1);
    console.log(
      this.correctLottoNums,
      this.bonusNumber,
      this.rank,
      this.earningRate,
    );
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    Console.close();
  }

  getRank(correctCount, isBonus) {
    switch (correctCount) {
      case 6:
        return "1";
      case 5:
        if (isBonus) {
          return "2";
        }
        return "3";
      case 4:
        return "4";
      case 3:
        return "5";
      default:
        return;
    }
  }
}

const app = new App();
app.play();

// module.exports = App;
