const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userAmount;
    this.lottoNumbers;
    this.winningNums;
    this.bonusNumber;
    this.matchCount = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.rateOfReturn;
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

    this.printResult();
  }

  printResult() {
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.matchCount.fifth}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.matchCount.fourth}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.matchCount.third}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchCount.second}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.matchCount.first}개`
    );

    this.printReward();
  }

  printReward() {
    let reward;
    reward =
      2000000000 * this.matchCount.first +
      30000000 * this.matchCount.second +
      1500000 * this.matchCount.third +
      50000 * this.matchCount.fourth +
      5000 * this.matchCount.fifth;
    this.rateOfReturn = (reward / this.userAmount) * 100;
    this.rateOfReturn = Math.round(this.rateOfReturn * 100) / 100;

    MissionUtils.Console.print(`총 수익률은 ${this.rateOfReturn}%입니다.`);

    this.endGame();
  }

  endGame() {
    MissionUtils.Console.close();
  }
}

module.exports = App;
