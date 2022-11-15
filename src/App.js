const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.lottoList = [];
    this.lottoNum = this.inputMoney();
    this.publishLotto(this.lottoNum);
    this.printLotto(this.lottoNum);
    this.winNum = [];
    this.bonusNum = 0;
    this.increase = 0;
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

  inputWinNum() {
    Console.readLine("당첨 번호를 입력해주세요.", (input) => {
      const num = input.split(",").map(Number);
      this.winNum = new Lotto(num);
    });
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      const num = Number(input);
      if (validateBonusNum(num) == false) {
        throw new error("[ERROR] 보너스 번호의 입력이 조건과 맞지 않습니다.");
      }
      this.bonusNum = num;
    });
  }

  validateBonusNum(bonusNum) {
    if (Number(bonusNum) === false) return false;
    if (1 > bonusNum || 45 < bonusNum) return false;
    this.lottoList.forEach((item) => {
      if (item.includes(bonusNum)) return false;
    });

    return true;
  }
}

module.exports = App;
