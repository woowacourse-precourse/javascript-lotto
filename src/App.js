const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyCost = 0;
    this.eachLotto = 0;
    this.lottoList = [];
    this.winningLotto = [];
    this.bonusLottoNum = 0;
  }

  inputCost() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      if (cost / 1000 < 1) {
        throw new Error("[ERROR] 로또 구입금액이 부족합니다.");
      }
      this.buyCost = cost;
    });
  }

  calculateEachLotto() {
    this.eachLotto = parseInt(this.buyCost / 1000);
  }

  makeLottoList() {
    for (var i = 0; i < this.eachLotto; i++) {
      var selectLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      var selectedLotto = new Lotto(selectLotto);
      this.lottoList.push(selectedLotto);
    }
  }

  printLottoInfo() {
    MissionUtils.Console.print(`\n${this.eachLotto}개를 구입했습니다.`);
    for (var lotto in this.lottoList) {
      MissionUtils.Console.print(lotto);
    }
  }

  inputWinningLotto() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.",
      (winLotto) => {
        var tempWinLotto = winLotto.split(",");
        var winLottoArr = new Lotto(tempWinLotto);
        this.winningLotto.push(...winLottoArr);
      }
    );
  }

  inputBonusLotto() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.",
      (bonusNum) => {
        if (bonusNum < 1 || bonusNum > 45)
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        if (bonusNum in this.winningLotto)
          throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.");
        this.bonusLottoNum = bonusNum;
      }
    );
  }

  play() {}
}

module.exports = App;
