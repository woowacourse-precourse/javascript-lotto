const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeUserLottoNumber() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n", (money) => {
      const lottoSheets = money / 1000;
      const userLottos = [];
      MissionUtils.Console.print(`\n${lottoSheets}개를 구매했습니다.`);
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
      this.winningAndBonusNumber(userLottos);
    });
  }
  winningAndBonusNumber(userLottos) {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요. \n",
      (winningNum) => {
        const winningLotto = winningNum.split(",");
        MissionUtils.Console.readLine(
          "\n보너스 번호를 입력해 주세요. \n",
          (bonusNum) => {
            this.statistics(winningLotto, bonusNum);
          }
        );
      }
    );
  }
  play() {
    this.makeUserLottoNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
