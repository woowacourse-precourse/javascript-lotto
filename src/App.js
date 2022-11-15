const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.lottoList = [];
    this.lottoNum = this.inputMoney();
    this.publishLotto(this.lottoNum);
    this.printLotto(this.lottoNum);
  }

  inputMoney() {
    let money;
    MissionUtils.Console.readLine("구입금액을 입력해주세요", (input) => {
      if (input % 1000 !== 0) {
        throw new error("[ERROR] 잘못된 금액입니다.");
      }
      money = input;
    });

    return money / 1000;
  }

  publishLotto(num) {
    for (let i = 0; i < num; i++) {
      var lotto = new Lotto(
        MISSIONUTILS.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      lotto.sort();
      this.lottoList.push(lotto);
    }
  }

  printLotto(num) {
    Console.print(num + "개를 구매했습니다.");
    for (let i = 0; i < num; i++) {
      Console.print(this.lottoList[i].getNumString());
    }
  }
}

module.exports = App;
