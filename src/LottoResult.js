const MissionUtils = require("@woowacourse/mission-utils");

class LottoResult {
  #score;

  constructor(userLotto, wonLotto, bonusNumber) {
    this.score = [];
  }

  calculateLotto(userLotto, wonLotto, bonusNumber) {
    for (let index = 0; index < userLotto.length; index++) {
      this.calculate(userLotto[index], wonLotto, bonusNumber);
    }
  }

  calculate() {}
}

module.exports = LottoResult;
