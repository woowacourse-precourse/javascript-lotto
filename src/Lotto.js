const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.inputAmount();
    //this.validate(numbers);
    this.#numbers = numbers;
  }

  //validate(numbers) {
  //  if (numbers.length !== 6) {
  //    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //  }
  //}

  // TODO: 추가 기능 구현
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
