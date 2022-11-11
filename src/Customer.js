const MissionUtils = require("@woowacourse/mission-utils");

class Customer {
  #lottoInstance;

  constructor(lottoInstance) {
    this.lottoInstance = lottoInstance;
  }

  set buyLotto(lottos) {
    this.lottoInstance = lottos;
  }

  get showLotto() {
    return this.lottoInstance;
  }

  payMoney() {
    const input = MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (money) => {
        return money;
      }
    );
    const inputInt = parseInt(input);
    if (inputInt % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액이 천원 단위가 아닙니다");
    return inputInt;
  }
}

module.exports = Customer;
