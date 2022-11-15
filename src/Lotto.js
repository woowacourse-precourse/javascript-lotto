const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoArray = [];
    this.win = [];
    this.bonus = 0;
  }

  inputAmount() {
    const ENTER_AMOUNT = 0;
    MissionUtils.Console.readLine("금액을 입력해주세요.", (answer) => {
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
      MissionUtils.Console.print(sortPrint);
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
      MissionUtils.Console.close();
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
}
module.exports = Lotto;
