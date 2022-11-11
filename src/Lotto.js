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
      MissionUtils.Console.close();
    });
  }
}

const lotto = new Lotto();
lotto.inputAmount();
module.exports = Lotto;
