const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.getWinningNumber();
    this.bonusNumber;
    this.collectNumber;
    this.matchNumber = [0, 0, 0, 0, 0];
    this.yield = 0;

    this.winningMoney = [5000, 50000, 1500000, 30000000, 2000000000];
  }

  compareNumbers() {
    console.log("this is Lotto class Number");
    console.log(this.#numbers);
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요. \n",
      (number) => {
        this.winningNumber = this.splitWinningNumber(number);

        this.winningNumber.sort((a, b) => {
          return a - b;
        });

        this.winningNumberValidate();

        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (number) => {
        this.bonusNumber = number;

        this.compareLottoNumber();

        MissionUtils.Console.close();
      }
    );
  }
  compareLottoNumber() {
    this.#numbers.map((numbers) => {
      this.collectNumber = numbers.filter((samenumber) =>
        this.winningNumber.includes(samenumber)
      );

      if (this.collectNumber.length === 3) {
        this.matchNumber[0]++;
      }
      if (this.collectNumber.length === 4) {
        this.matchNumber[1]++;
      }
      if (this.collectNumber.length === 5) {
        this.matchNumber[2]++;
      }
      if (
        this.collectNumber.length === 5 &&
        numbers.includes(this.bonusNumber)
      ) {
        this.matchNumber[3]++;
      }
      if (this.collectNumber.length === 6) {
        this.matchNumber[4]++;
      }
    });

    MissionUtils.Console.print("\n당첨 통계\n---");

    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.matchNumber[0]} 개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.matchNumber[1]} 개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.matchNumber[2]} 개`
    );
    MissionUtils.Console.print(
      `5개 일치 (30,000,000원) - ${this.matchNumber[3]} 개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.matchNumber[4]} 개`
    );

    this.yield += this.matchNumber[0] * this.winningMoney[0];
    this.yield += this.matchNumber[1] * this.winningMoney[1];
    this.yield += this.matchNumber[2] * this.winningMoney[2];
    this.yield += this.matchNumber[3] * this.winningMoney[3];
    this.yield += this.matchNumber[4] * this.winningMoney[4];

    MissionUtils.Console.print(
      `총 수익률은 ${(
        (this.yield / (this.#numbers.length * 1000)) *
        100
      ).toFixed(1)}%입니다.`
    );
  }
  winningNumberValidate() {
    if (this.winningNumber.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6자리여야 합니다.");
    }

    this.winningNumber.map((number) => {
      if (Number(number) > 45 || Number(number) === 0) {
        throw new Error("[ERROR] 당첨 번호가 1~45가 아닙니다.");
      }
    });
  }

  splitWinningNumber(number) {
    return number.split(",").map(Number);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
