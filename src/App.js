const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  Money = 0;
  LottoNum = 0;
  TotalLotto = [];
  WinLotto = [];
  Bonus = 0;
  Result = [0, 0, 0, 0, 0, 0, 0];
  isBonus = 0;
  WinPrice = ["5,000", "50,000", "1,500,000", "2,000,000,000"];
  IntPrice = [5000, 50000, 1500000, 2000000000];
  checkMoney(Money) {
    if (parseInt(Money % 1000) != 0) {
      throw "[ERROR] 1000으로 나누어 떨어지지 않음";
    }
    if (!parseInt(Money)) {
      throw "[ERROR] 숫자를 입력해주세요";
    }
    if (Money == 0) {
      throw "[ERROR] 0보다 큰 숫자를 입력해주세요";
    }
    return parseInt(Money / 1000);
  }
  setLottoNumber(Num) {
    MissionUtils.Console.print(`\n${Num}개를 구매했습니다.`);
    for (let i = 0; i < Num; i++) {
      try {
        let numArrays = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        let tmpLotto = new Lotto(numArrays);
        tmpLotto.printLotto();
        this.TotalLotto.push(tmpLotto.getLotto());
      } catch (e) {
        throw "[ERROR]";
      }
    }
  }

  setWinningNumber() {
    try {
      MissionUtils.Console.readLine(
        "\n당첨 번호를 입력해 주세요.\n",
        (userInput) => {
          let tmpWin = this.InputToLotto(userInput.split(","));
          this.WinLotto = new Lotto(tmpWin);
          this.setBonusNumber();
        }
      );
    } catch (e) {
      throw "[ERROR]";
    }
  }

  InputToLotto(arr) {
    let tmpArr = [];
    for (let i = 0; i < arr.length; i++) {
      tmpArr.push(parseInt(arr[i]));
    }
    return tmpArr;
  }

  setBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (userInput) => {
        try {
          this.checkBounsNumber(userInput);
          this.forEachLotto();
          this.printResult();
          this.HowMuchWon();
        } catch (e) {
          MissionUtils.Console.print(e);
          throw "[ERROR]";
        }
      }
    );
  }

  checkBounsNumber(Num) {
    if (!parseInt(Num)) {
      throw "[ERROR] 숫자를 입력해주세요";
    }
    if (parseInt(Num) < 1 || parseInt(Num) > 45) {
      throw "[ERROR] 1에서 45사이의 정수를 입력해주세요";
    }
    if (!Number.isInteger(parseInt(Num))) {
      throw "[ERROR] 1에서 45사이의 정수를 입력해주세요";
    }
    const WINNUMBER = this.WinLotto.getLotto();
    if (WINNUMBER.includes(parseInt(Num))) {
      throw "[ERROR] 보너스 번호는 당첨번호와 겹치면 안됩니다.";
    }
    this.Bonus = parseInt(Num);
  }

  forEachLotto() {
    for (let i = 0; i < this.LottoNum; i++) {
      this.forLotto(this.TotalLotto[i]);
    }
  }

  forLotto(arr) {
    let cnt = 0;
    const WINNUM = this.WinLotto.getLotto();
    for (let j = 0; j < 6; j++) {
      if (arr.includes(WINNUM[j])) {
        cnt++;
      }
    }

    if (cnt == 5 && arr.includes(this.Bonus)) {
      this.isBonus += 1;
      return;
    }
    this.Result[cnt] += 1;
  }
  calculateYield(Num) {
    return ((Num / this.Money) * 100).toFixed(1);
  }

  HowMuchWon() {
    let wonPrice = 0;
    for (let i = 3; i < 7; i++) {
      wonPrice += this.IntPrice[i - 3] * this.Result[i];
    }
    wonPrice += 30000000 * this.isBonus;
    MissionUtils.Console.print(
      `총 수익률은 ${this.calculateYield(wonPrice)}%입니다.`
    );
    MissionUtils.Console.close();
  }

  printResult() {
    MissionUtils.Console.print("\n당첨 통계\n---");
    for (let i = 3; i < 7; i++) {
      MissionUtils.Console.print(
        `${i}개 일치 (${this.WinPrice[i - 3]}원) - ${this.Result[i]}개`
      );
      if (i == 5) {
        MissionUtils.Console.print(
          `${i}개 일치, 보너스 볼 일치 (30,000,000원) - ${this.isBonus}개`
        );
      }
    }
  }

  play() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (userInput) => {
        try {
          this.LottoNum = this.checkMoney(userInput);
          this.Money = parseInt(userInput);
          this.setLottoNumber(this.LottoNum);
          this.setWinningNumber();
        } catch (e) {
          MissionUtils.Console.print(e);
          throw "[ERROR]";
        }
      }
    );
  }
}

tmp = new App();
tmp.play();

module.exports = App;
