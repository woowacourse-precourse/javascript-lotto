const STATIC = require("./Static");
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
    while (i < STATIC.LOTTOVALUE.LENGTH) {
      if (
        this.duplicateCheck(
          answer,
          (randVal = MissionUtils.Random.pickNumberInRange(
            STATIC.LOTTOVALUE.MIN,
            STATIC.LOTTOVALUE.MAX
          ))
        )
      ) {
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
