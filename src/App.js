const Lotto = require("./Lotto");
const { Console, Random } = require("@woowacourse/mission-utils");

const INPUT_MESSAGE = {
  money: "구입금액을 입력해 주세요.",
  bonus: "보너스 번호를 입력하세요.",
  winning: "당첨 번호를 입력해 주세요.",
};
const MONEY_ERROR = {
  number: "[ERROR] 숫자를 입력해 주세요",
  amount: "[ERROR] 1000원 단위로 입력해 주세요",
};
const BONUS_ERROR = {
  number: "[ERROR] 보너스 번호는 숫자여야 합니다",
  range: "[ERROR] 로또 번호는 1~45 사이여야 합니다",
};
const NUMBER_ERROR = "[ERROR] 잘못된 입력입니다.";

class App {
  userNumbersArray;
  lotto;

  play() {
    Console.print(INPUT_MESSAGE.money);
    Console.readLine("", (money) => {
      this.validateMoney(money);

      const numberOfLottery = Number(money) / 1000;
      Console.print(`${numberOfLottery}개를 구매했습니다.`);
      this.userNumbersArray = this.getRandomNumbers(numberOfLottery);

      this.printRandomNumbers();
      this.MakeLotto();
    });
  }

  printRandomNumbers() {
    for (let arr of this.userNumbersArray) {
      Console.print("[" + arr.join(", ") + "]");
    }
  }

  getRandomNumbers(num) {
    const userNumbersArray = [];

    for (let i = 0; i < num; i++) {
      userNumbersArray.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }
    return userNumbersArray;
  }

  MakeLotto() {
    Console.print(INPUT_MESSAGE.winning);
    Console.readLine("", (prizeNums) => {
      this.validInput(prizeNums);
      this.lotto = new Lotto(prizeNums.split(","));
      this.getBonusNumberAndPrintResult();
    });
  }

  getBonusNumberAndPrintResult() {
    Console.print(INPUT_MESSAGE.bonus);
    Console.readLine("", (bonusNum) => {
      this.validateBonusNumbers(bonusNum);
      this.lotto.printResult(this.userNumbersArray, Number(bonusNum));

      Console.close();
    });
  }

  validInput(input) {
    for (let word of input) {
      if (isNaN(word) && word !== ",") {
        throw new Error(NUMBER_ERROR);
      }
    }
  }

  validateMoney(money) {
    if (isNaN(money)) {
      Console.close();
      throw new Error(MONEY_ERROR.number);
    }
    if (Number(money) % 1000 !== 0) {
      Console.close();
      throw new Error(MONEY_ERROR.amount);
    }
  }
  validateBonusNumbers(bonusNumber) {
    if (isNaN(bonusNumber)) {
      Console.close();
      throw new Error(BONUS_ERROR.number);
    }
    if (bonusNumber > 45 && bonusNumber < 1) {
      Console.close();
      throw new Error(BONUS_ERROR.range);
    }
  }
}

module.exports = App;
