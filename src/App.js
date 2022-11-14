const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  Money = 0;
  LottoNum = 0;
  TotalLotto = [];
  winnumber = [];
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
        MissionUtils.Console.print(tmpLotto.getLotto());
        this.TotalLotto.push(tmpLotto.getLotto());
      } catch (e) {
        MissionUtils.Console.print(e);
      }
    }
  }
  setWinningNumber() {
    try {
      MissionUtils.Console.readLine(
        "당첨 번호를 입력해 주세요.:\n",
        (userInput) => {
          this.winnumber = new Lotto(userInput.split(","));
          console.log(this.winnumber.getLotto());
          this.setBonusNumber();
        }
      );
    } catch (e) {
      console.log(e);
      throw new Error();
    }
    return;
  }

  setBonusNumber() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요\n",
      (userInput) => {
        try {
          this.checkBounsNumber(userInput);
        } catch (e) {
          MissionUtils.Console.print(e);
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
    if (!Number.isInteger(Num)) {
      throw "[ERROR] 1에서 45사이의 정수를 입력해주세요";
    }
  }

  play() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.:\n",
      (userInput) => {
        try {
          this.LottoNum = this.checkMoney(userInput);
          console.log(this.LottoNum);
          this.setLottoNumber(this.LottoNum);
          this.setWinningNumber();
          this.setBonusNumber();
        } catch (e) {
          MissionUtils.Console.print(e);
          throw new Error();
        }
      }
    );
  }
}

tmp = new App();
tmp.play();

// module.exports = App;
