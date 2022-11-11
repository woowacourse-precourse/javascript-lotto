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
    const money = MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (money) => {
        return money;
      }
    );
    const paidMoney = parseInt(money);
    if (paidMoney % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액이 천원 단위가 아닙니다");
    return paidMoney;
  }
}

module.exports = Customer;
