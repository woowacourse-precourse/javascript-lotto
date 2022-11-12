const STATIC = require("./Static");
const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  number;
  constructor() {
    this.number = this.createNumber();
  }

  createNumber = () => {
    let i = 0;
    const answer = [];
    while (i < STATIC.LOTTOVALUE.LENGTH) {
      const randVal = MissionUtils.Random.pickNumberInRange(
        STATIC.LOTTOVALUE.MIN,
        STATIC.LOTTOVALUE.MAX
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

module.exports = UserLotto;
