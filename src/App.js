const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    this.computer = this.randomNum();
  }

  randomNum() {
    let randomNum = [];
    while (randomNum.length != 7) {
      let pickNm = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!randomNum.includes(pickNum)) {
        randomNum.push(pickNum);
      }
    }
  }
}

module.exports = App;
