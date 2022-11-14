const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  Money = 0;
  LottoNum = 0;
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

  getMoney() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.: ",
      (userInput) => {
        try {
          console.log(this.checkMoney(userInput));
        } catch (e) {
          MissionUtils.Console.print(e);
          MissionUtils.Console.close();
          throw new Error();
        }
      }
    );
  }

  play() {
    try {
      this.getMoney();
    } catch (e) {
      console.log(e);
    }
  }
}

tmp = new App();
tmp.play();

// module.exports = App;
