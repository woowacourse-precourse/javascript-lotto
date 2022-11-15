const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.inputMoney();
  }
  inputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.\n", (money) => {
      const countLotto = money / 1000;
      console.log(`\n${countLotto}개를 구매했습니다.`);
      const LottoNum = showLottoNum(money);
      this.inputWinnerNumber(LottoNum);
    });
  }
  inputWinnerNumber(LottoNum) {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해주세요.\n", (num) => {
      const WinNum = num.split(",").map((element) => parseInt(element));
      console.log(`\n당첨번호: ${WinNum}`);
      this.calWinnerNum(WinNum, LottoNum);
      this.inputBonusNumber();
    });
  }
  inputBonusNumber() {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해주세요.\n", (numB) => {
      const BonusNum = parseInt(numB);
      //console.log(`보너스 번호: ${BonusNum}`);
      this.printResult();
      return BonusNum;
    });
  }
  calWinnerNum(WinNum, LottoNumArr) {
    let winCount = 0;
    for (let i = 0; i < WinNum.length; i++) {
      LottoNumArr.forEach((num) => {
        if (WinNum[num]) winCount++;
      });
    }
    console.log(winCount);
    return winCount;
  }
  rankingWinner(winCount) {
    const BonusNum = this.inputBonusNumber();
    switch (winCount) {
      case 6:
        return 1;
      case 5:
        return this.LottoNumArr.includes(BonusNum) ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
    }
    return winCount;
  }
  printResult() {
    console.log(this.rankingWinner(winCount));
  }
}

function showLottoNum(money) {
  const LottoNumArr = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < money / 1000; i++) {
    for (let j = 0; j < 6; j++) {
      let n = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!sameNumber(n)) {
        LottoNumArr[j] = n;
      }
    }
    console.log(LottoNumArr);
  }
  return LottoNumArr;
  function sameNumber(n) {
    for (var i = 0; i < LottoNumArr.length; i++) {
      if (n === LottoNumArr[i]) {
        return true;
      }
    }
    return false;
  }
}

const app = new App();
app.play();
module.exports = App;
