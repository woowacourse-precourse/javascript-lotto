const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  Money = 0;
  LottoNum = 0;
  TotalLotto = [];
  checkMoney(Money) {
    if (parseInt(Money % 1000) != 0) {
      throw "[ERROR] 1000으로 나누어 떨어지지 않음";
    }
    if (!parseInt(Money)) {
      throw "[ERROR] 숫자를 입력해주세요";
    }
    if (Money == 0) {
      throw "0보다 큰 숫자를 입력해주세요";
    }
    return parseInt(Money / 1000);
  }
  setLottoNumber(Num) {
    MissionUtils.Console.print(`${Num}개를 구매했습니다.\n`);
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
  play() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.: ",
      (userInput) => {
        try {
          this.LottoNum = this.checkMoney(userInput);
          console.log(this.LottoNum);
          this.setLottoNumber(this.LottoNum);
          // console.log(this.TotalLotto);
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
