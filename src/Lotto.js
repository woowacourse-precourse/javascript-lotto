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
}
const lotto = new Lotto();
//lotto.inputAmount();
console.log(lotto.printLotto(6));
module.exports = Lotto;
