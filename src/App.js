const MissionUtils = require("@woowacourse/mission-utils");

class App {
  MIN_NUMBER = 1;
  MAX_NUMBER = 45;
  LOTTO_LENGTH = 6;
  STANDARD_AMOUNT = 1000;
  REWARD_AMOUNT = [2000000000, 30000000, 1500000, 50000, 5000];

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

  play() {
    this.printStartGame();
  }

  printStartGame() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요: ", (amount) => {
      this.validateAmount(+amount);
      this.userAmount = amount;
      this.howManyBuyLotto(amount);
    });
  }

  validateAmount(amount) {
    if (typeof amount !== "number" || isNaN(amount))
      throw new TypeError("[ERROR] 숫자를 입력해주세요.");
    if (amount % this.STANDARD_AMOUNT !== 0)
      throw new RangeError("[ERROR] 1,000 단위로만 입력가능합니다.");
  }

  howManyBuyLotto(amount) {
    const count = parseInt(amount / this.STANDARD_AMOUNT);
    MissionUtils.Console.print(`${Number(count)}개를 구매했습니다.`);

    this.printLottoList(count);
  }

  getLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      this.MIN_NUMBER,
      this.MAX_NUMBER,
      this.LOTTO_LENGTH
    );
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
        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.validateBonusNumber(+bonus);
      this.bonusNumber = +bonus;
      this.matchLottoNumbers();
    });
  }

  validateBonusNumber(bonus) {
    if (typeof bonus !== "number" || isNaN(bonus))
      throw new TypeError("[ERROR] 숫자로 입력해주세요.");
    if (bonus < 1 || bonus > 45)
      throw new RangeError("[ERROR] 1~45 사이의 숫자를 입력하세요");
    if (this.winningNums.includes(bonus))
      throw new Error("[ERROR] 당첨번호와 중복된 숫자는 입력할 수 없습니다.");
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
      this.REWARD_AMOUNT[0] * this.matchCount.first +
      this.REWARD_AMOUNT[1] * this.matchCount.second +
      this.REWARD_AMOUNT[2] * this.matchCount.third +
      this.REWARD_AMOUNT[3] * this.matchCount.fourth +
      this.REWARD_AMOUNT[4] * this.matchCount.fifth;
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
