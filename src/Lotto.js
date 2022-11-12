const MissionUtils = require("@woowacourse/mission-utils");

const STATIC = require("./Static");

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

  // TODO: 추가 기능 구현
}

buyMoneyError = (money) => {
  if (money % 1000 != 0) {
    throw new Error(STATIC.MESSAGE.ERR_BUY);
  }
};

buyLotto = (lotto) => {
  MissionUtils.Console.readLine(STATIC.MESSAGE.BUYMONEY, (answer) => {
    buyMoneyError(answer);
  });
};

module.exports = Lotto;

//입력 받고
// 체크 후 userlotto 생성을 하자
