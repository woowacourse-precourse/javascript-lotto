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
      if (isNaN(userInput) == true) throw new Error('숫자를 입력 해주세요.');
      if (userInput % 1000 !== 0) throw new Error('1,000원 단위로 입력 해주세요.');
      MissionUtils.Console.close();
      return this.checkHowManyLottos(userInput)
    })
  }

  checkHowManyLottos(payment) {
    const boughtLottos = payment/1000;
    MissionUtils.Console.print(boughtLottos+'개를 구매했습니다.')
    return boughtLottos
  }
  
  // TODO: 추가 기능 구현
}





module.exports = Lotto;
