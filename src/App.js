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

class App {
  prizeNumbersArray;
  userNumbersArray;
  lotto;

  play() {
    Console.print(INPUT_MESSAGE.money);
    Console.readLine("", (money) => {
      this.validateMoney(money);

      this.userNumbersArray = this.getRandomNumbers(numberOfLottery);
      this.printRandomNumbers(this.userNumbersArray);

      this.MakeLotto(this.userNumbersArray);
    });
  }

  printRandomNumbers(userNumbersArray) {
    for (let arr of userNumbersArray) {
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
      this.prizeNumbersArray = prizeNums.split(",");
      this.lotto = new Lotto(this.prizeNumbersArray);
    });
  }

  validateMoney(money) {
    if (isNaN(money)) {
      throw new Error(MONEY_ERROR.number);
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error(MONEY_ERROR.amount);
    }
  }
}

module.exports = App;
