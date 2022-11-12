const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
  userLottoNumber() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n", (money) => {
      const lottoSheets = money / 1000;
      const userLottos = [];
      MissionUtils.Console.print(`${lottoSheets}개를 구매했습니다. \n`);
      for (let i = 0; i < lottoSheets; i++) {
        const userLotto = MissionUtils.Random.pickUniqueNumbersInRange(
          1,
          45,
          6
        ).sort((a, b) => {
          return a - b;
        });
        MissionUtils.Console.print(userLotto);
        userLottos.push(userLotto);
      }
    });
  }
}

const app = new App();
app.userLottoNumber();

module.exports = App;
