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
    this.matchingNumber = [];
  }

  makeLotto() {
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    return numbers;
  }

  setTheNumberOfLotto(number) {
    this.theNumberOfLotto = number;
  }

  getTheNumberOfLotto() {
    return this.theNumberOfLotto;
  }

  setLottos() {
    for (let i = 0; i < this.theNumberOfLotto; i++) {
      this.lottos.push(new UserLotto(this.makeLotto()));
    }
  }

  getLottos() {
    return this.lottos;
  }

  setMatchingNumber() {
    for (let i = 0; i < this.theNumberOfLotto; i++) {
      this.matchingNumber[i] = 0;
    }
  }
}

module.exports = UserLottos;
