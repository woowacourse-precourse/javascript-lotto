const MissionUtils = require("@woowacourse/mission-utils");

class UserLotto {
  constructor(numbers) {
    this.numbers = numbers;
  }

  getNumbers() {
    return this.numbers;
  }
}

class UserLottos {
  constructor() {
    this.theNumberOfLotto;
    this.lottos = [];
  }

  setTheNumberOfLotto(number) {
    this.theNumberOfLotto = number;
  }

  getTheNumberOfLotto() {
    return this.theNumberOfLotto;
  }

  getLottos() {
    return this.lottos;
  }
}

module.exports = UserLottos;
