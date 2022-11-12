const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("./Static");
const UserLotto = require("./UserLotto");

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
  MissionUtils.Console.readLine(STATIC.MESSAGE.BUYMONEY, (money) => {
    buyMoneyError(money);
    const userPickLotto = createUserLotto(money);
  });
};

createUserLotto = (money) => {
  return [...Array(money / 1000).keys()].map(() => {
    return new UserLotto().number;
  });
};

LottoGame = () => {
  buyLotto();
};

module.exports = LottoGame;

//입력 받고
// 체크 후 userlotto 생성을 하자
