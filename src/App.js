const { Random } = require('@woowacourse/mission-utils');

class App {
  play() {}

  getNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = App;
