const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  getUserPayment() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (userInput) => {
      MissionUtils.Console.close();
      return userInput
    })
  }

  // TODO: 추가 기능 구현
}


//>>>>>>>>>>>>UI test<<<<<<<<<<<<<<
const lotto = new Lotto();
lotto.getUserPayment();



module.exports = Lotto;
