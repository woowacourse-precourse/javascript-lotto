const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  inputAmount(amount) {
    let answer = 0;
    MissionUtils.Console.readLine("금액을 입력해주세요.", (answer) => {
      console.log(`입력한 금액: ${answer}`);
      this.checkAmount(answer);
      MissionUtils.Console.close();
      return answer;
    });
  }

  checkAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액을 1,000 단위로 입력해주세요.");
    }
  }

  purchaseLotto(amount) {
    let num = amount / 1000;
    console.log(num);
    return num;
  }

  printLotto(num) {
    const lottery = [];
    for (var int = 0; int < num; int++) {
      lottery[int] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
    MissionUtils.Console.close();
    return lottery;
  }

  sortArray(array) {
    array.sort(function compare(a, b) {
      return a - b;
    });
    return array;
  }

  winningNumber(number) {
    MissionUtils.Console.readLine("당첨 번호를 입력해주세요.", (answer) => {
      const number = answer.split(",");
      console.log(number);
      MissionUtils.Console.close();
    });
    return number;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}
const lotto = new Lotto();
//lotto.inputAmount();
console.log(lotto.winningNumber());
module.exports = Lotto;
