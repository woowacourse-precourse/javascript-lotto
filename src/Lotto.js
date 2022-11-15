const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.INPUT_AMOUNT = 0;
    this.lottoArray = [];
    this.win = [];
    this.bonus = 0;
    this.valueResult = {
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    };
  }

  inputAmount() {
    MissionUtils.Console.readLine("금액을 입력해주세요.", (answer) => {
      this.INPUT_AMOUNT = answer;
      this.checkAmount(answer);
      let num = this.purchaseLotto(answer);
      this.printLotto(num);
      this.winningNumber();
      //MissionUtils.Console.close();
    });
  }

  checkAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액을 1,000 단위로 입력해주세요.");
    }
  }

  purchaseLotto(amount) {
    let num = amount / 1000;
    return num;
  }

  printLotto(num) {
    MissionUtils.Console.print(num + "개를 구매했습니다.");
    for (var int = 0; int < num; int++) {
      const print = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortPrint = this.sortArray(print);
      MissionUtils.Console.print(`[${sortPrint.join(", ")}]`);
      this.lottoArray.push(sortPrint);
    }
    //MissionUtils.Console.close();
  }

  sortArray(array) {
    array.sort(function compare(a, b) {
      return a - b;
    });
    return array;
  }

  winningNumber(winNumber) {
    MissionUtils.Console.readLine("당첨 번호를 입력해주세요. ", (win) => {
      this.win = win.split(",").map((element) => parseInt(element));
      console.log(this.win);
      this.validate(this.win);
      this.duplicate(this.win);
      this.inrangeNumber(this.win);
      //MissionUtils.Console.print(this.win);
      this.bonusNumber();
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    return numbers;
  }

  duplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호가 중복되어서는 안됩니다.");
    }
  }

  inrangeNumber(numbers) {
    for (var int = 0; int < numbers.length; int++) {
      if (numbers[int] > 45) {
        throw new Error("[ERROR] 1 ~ 45 사이의 수가 아닙니다.");
      }
    }
  }

  bonusNumber(number) {
    MissionUtils.Console.readLine("보너스 번호를 입력해주세요. ", (bonus) => {
      const bonusNum = parseInt(bonus);
      this.bonusInrangeNumber(bonusNum);
      this.checkBonusNumber(bonusNum);
      this.bonus = bonusNum;
      this.processList();
      this.printResult();
    });
  }

  bonusInrangeNumber(number) {
    if (number < 0 || number > 45) {
      throw new Error("[ERROR] 1 ~ 45 사이의 수가 아닙니다.");
    }
  }

  checkBonusNumber(number) {
    for (var i = 0; i < this.win.length; i++) {
      if (number === this.win[i]) {
        throw new Error("당첨 번호와 같은 번호를 입력하셨습니다.");
      }
    }
  }

  processList() {
    this.lottoArray.map((number) => {
      let winCount = 0;
      let bonus = false;
      number.map((number) => {
        if (this.win.includes(number)) {
          winCount += 1;
        }
        if (number === this.bonus) {
          bonus = true;
        }
      });

      this.lottoValueResult(winCount, bonus);
    });
  }

  lottoValueResult(count, bonus) {
    if (count === 3) {
      this.valueResult["5000"] += 1;
    }
    if (count === 4) {
      this.valueResult["50000"] += 1;
    }
    if (count === 5 && bonus === false) {
      this.valueResult["1500000"] += 1;
    }
    if (count === 5 && bonus === true) {
      this.valueResult["30000000"] += 1;
    }
    if (count === 6) {
      this.valueResult["2000000000"] += 1;
    }
  }

  printResult() {
    //console.log("당첨통계==============================");
    MissionUtils.Console.print(
      "3개 일치 (5,000원) - " + this.valueResult["5000"] + "개"
    );
    MissionUtils.Console.print(
      "4개 일치 (50,000원) - " + this.valueResult["50000"] + "개"
    );
    MissionUtils.Console.print(
      "5개 일치 (1,500,000원) - " + this.valueResult["1500000"] + "개"
    );
    MissionUtils.Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " +
        this.valueResult["30000000"] +
        "개"
    );
    MissionUtils.Console.print(
      "6개 일치 (2,000,000,000원) - " + this.valueResult["2000000000"] + "개"
    );
    this.revenue();
    MissionUtils.Console.close();
  }
  revenue() {
    let sum = 0;
    for (let value in this.valueResult) {
      sum += parseInt(value) * this.valueResult[value];
      //console.log(parseInt(value), this.valueResult[value]);
    }
    //console.log(sum);

    let calculate = ((sum / this.INPUT_AMOUNT) * 100).toFixed(1);
    MissionUtils.Console.print("총 수익률은 " + calculate + "%입니다.");
  }
}
module.exports = Lotto;
