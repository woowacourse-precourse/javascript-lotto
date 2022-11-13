const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./Message.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getMatchCount(userNums) {
    let matchCounts = [];
    userNums.forEach((userNum) => {
      matchCounts.push(this.matchLotto(userNum));
    })
    return matchCounts;
  }

  matchLotto(userNum) {
    let matchNum = 0;
    this.#numbers.forEach((lottoNumber) => {
      if (userNum.includes(lottoNumber)) {
        matchNum += 1;
      }
    })
    return matchNum;
  }

  validate(numbers) {
    const MAX_LENGTH = 6;
    if (numbers.length !== MAX_LENGTH) {
      throw new Error(Message.lottoNumberValidWarning);
    }
  }
}

module.exports = Lotto;
