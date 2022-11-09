const MissionUtils = require("@woowacourse/mission-utils");

const setLottoNumber = () => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumber;
}


class App {
  play() {}
}
const app = new App();
app.play()

module.exports = App;
