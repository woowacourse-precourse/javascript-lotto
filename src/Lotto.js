const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해주세요\n', this.saveMoney.bind(this));
  }
  saveMoney(input) {
    const money = input;
    MissionUtils.Console.print(money + ' 개를 구매했습니다.')
  }

  


  // TODO: 추가 기능 구현
}










module.exports = Lotto;
