const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeUserLottoNumber() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n", (money) => {
      if (isNaN(money)) throw new Error("[ERROR] 숫자만 입력해주세요.");
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
      this.winningAndBonusNumber(money, userLottos);
    });
  }
  winningAndBonusNumber(money, userLottos) {
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
            this.compareLotto(money, userLottos, winningNumber, NumBonusLotto);
          }
        );
      }
    );
  }
  compareLotto(money, userLottos, winningNum, bonusNum) {
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
    this.giveStatistics(money, winObj);
  }

  giveStatistics(money, winObj) {
    let allPrice = 0;
    for (const key in winObj) {
      switch (key) {
        case "three":
          allPrice += winObj.three * 5000;
        case "four":
          allPrice += winObj.four * 50000;
        case "five":
          allPrice += winObj.five * 1500000;
        case "five_bonus":
          allPrice += winObj.five_bonus * 30000000;
        case "six":
          allPrice += winObj.six * 200000000;
      }
    }
    let statistics = ((allPrice / money) * 100).toFixed(1);
    MissionUtils.Console
      .print(`\n당첨 통계\n---\n3개 일치 (5,000원) - ${winObj.three}개\n4개 일치 (50,000원) - ${winObj.four}개\n5개 일치 (1,500,000원) - ${winObj.five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${winObj.five_bonus}개\n6개 일치 (2,000,000,000원) - ${winObj.six}개\n총 수익률은 ${statistics}%입니다.
    `);
    MissionUtils.Console.close();
  }
  play() {
    this.makeUserLottoNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
