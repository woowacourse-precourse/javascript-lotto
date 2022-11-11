const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.inputAmount();
    this.#numbers = numbers;
  }

  inputAmount(numbers) {
    MissionUtils.Console.readLine("금액을 입력해주세요.", (answer) => {
      console.log(`입력한 금액: ${answer}`);
      this.checkAmount(answer);
      MissionUtils.Console.close();
    });
  }

  checkAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액을 1,000 단위로 입력해주세요.");
    }
  }
}

const lotto = new Lotto();
lotto.inputAmount();
module.exports = Lotto;
