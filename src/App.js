const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {}

  play() {}

  lottoNum(answer) {
    console.readLine('구입금액을 입력 해주세요/n', (answer) => {
      console.log(answer);
    });
  }
}


module.exports = App;
