const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userAmount;
    this.lottoNumbers;
    this.winningNums;
    this.bonusNumber;
  }

  play() {}

  printStartGame() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요: ", (amount) => {
      this.userAmount = amount;
      this.howManyBuyLotto(amount);
    });
  }

  howManyBuyLotto(amount) {
    const count = parseInt(amount / 1000);
    MissionUtils.Console.print(`${Number(count)}개를 구매했습니다.`);

    this.printLottoList(count);
  }

  getLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }

  printLottoList(count) {
    let lottoNumbers = [];
    for (let index = 0; index < count; index++) {
      lottoNumbers.push(this.getLottoNumbers());
      this.lottoNumbers = lottoNumbers;
      MissionUtils.Console.print(
        JSON.stringify(lottoNumbers[index]).replace(/,/g, ", ")
      );
    }

    this.getWinningNumber();
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.\n",
      (winningNumber) => {
        this.winningNums = winningNumber.split(",").map((number) => +number);
        winningNumber;
        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonusNumber = +bonus;
      this.matchLottoNumbers();
    });
  }

  matchLottoNumbers() {
    for (let index = 0; index < this.lottoNumbers.length; index++) {
      let count = this.lottoNumbers[index].filter((number) =>
        this.winningNums.includes(number)
      ).length;

      if (count === 6) {
        this.matchCount.first += 1;
        count = 0;
      }
      if (count === 5) {
        if (this.lottoNumbers[index].includes(this.bonusNumber)) {
          this.matchCount.second += 1;
          count = 0;
        } else {
          this.matchCount.third += 1;
          count = 0;
        }
      }
      if (count === 4) {
        this.matchCount.fourth += 1;
        count = 0;
      }
      if (count === 3) {
        this.matchCount.fifth += 1;
        count = 0;
      }
    }
    MissionUtils.Console.print(this.matchCount);
  }
}

module.exports = App;
