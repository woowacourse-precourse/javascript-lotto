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
        const winningNumber = winningLotto.map((el) => {
          if (typeof el === "string") return Number(el);
        });
        MissionUtils.Console.readLine(
          "\n보너스 번호를 입력해 주세요. \n",
          (bonusNum) => {
            const NumBonusLotto = Number(bonusNum);
            this.compareLotto(userLottos, winningNumber, NumBonusLotto);
          }
        );
      }
    );
  }
  compareLotto(userLottos, winningNum, bonusNum) {
    let winObj = {
      three: 0,
      four: 0,
      five: 0,
      five_bonus: 0,
      six: 0,
    };
    for (let i = 0; i < userLottos.length; i++) {
      let count = 0;
      let bonusCount = 0;
      for (let j = 0; j < userLottos[i].length; j++) {
        if (userLottos[i].includes(winningNum[j])) count++;
        if (userLottos[i].includes(bonusNum)) bonusCount++;
      }
      if (count === 3) winObj.three++;
      else if (count === 4) winObj.four++;
      else if (count === 5) {
        if (bonusCount > 0) winObj.five_bonus++;
        else winObj.five++;
      } else if (count === 6) winObj.six++;
    }
    this.giveStatistics(winObj);
  }

  giveStatistics(winObj) {
    console.log(winObj);
  }
  play() {
    this.makeUserLottoNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
