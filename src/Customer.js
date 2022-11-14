const Constant = require("./utils/Constant");
const MissionUtils = require("@woowacourse/mission-utils");

class Customer {
  constructor() {
    this.lottoList = [];
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Constant.MESSAGE.ERROR.OUT_OF_RANGE);
    }
  }
  purchaseLotto() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_MONEY,
      (answer) => {
        //유효성검사
        this.publishLotto(answer);
        console.log(this.lottoList);
      }
    );
  }
  publishLotto(money) {
    const lottoNum = Math.floor(money / Constant.LOTTO.LOTTO_PRICE);
    for (let i = 0; i < lottoNum; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push(numbers);
    }
    return this.lottoList;
  }

  // TODO: 추가 기능 구현
}

module.exports = Customer;
