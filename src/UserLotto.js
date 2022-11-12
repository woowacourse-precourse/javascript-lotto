const LOTTOVALUE = require("./Static");
const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  number;
  constructor() {
    this.number = this.createNumber();
    console.log(this.number);
  }
  createNumber = () => {
    let i = 0;
    const answer = [];
    while (i < LOTTOVALUE.LENGTH) {
      let randVal = MissionUtils.Random.pickNumberInRange(
        LOTTOVALUE.MIN,
        LOTTOVALUE.MAX
      );
      if (this.duplicateCheck(answer, randVal)) {
        answer.push(randVal);
        i++;
      }
    }

    return answer;
  };
  duplicateCheck = (answer, val) => {
    return answer.every((e) => val !== e);
  };
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

module.exports = UserLotto;
