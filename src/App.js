const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyCost = 0;
    this.eachLotto = 0;
    this.lottoList = [];
    this.winningLotto;
    this.bonusLottoNum = 0;
    this.countEachWinningCost = [0, 0, 0, 0, 0]; // 3개, 4개, 5개, 5개+보너스, 6개순
  }

  inputCost() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      var tempCost = parseInt(cost);
      if (String(tempCost) !== String(cost)) {
        throw new Error("[ERROR] 로또 구입금액에 문자열이 포함되면 안됩니다.");
      }
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
      this.lottoList.push(selectedLotto.getNumbers());
    }
  }

  printLottoInfo() {
    MissionUtils.Console.print(`${this.eachLotto}개를 구매했습니다.`);
    for (var i = 0; i < this.lottoList.length; i++) {
      var lottoText = "[";
      var lottoText2 = "";
      for (var j = 0; j < this.lottoList[i].length; j++) {
        lottoText += this.lottoList[i][j];
        lottoText += ", ";
      }
      lottoText2 += lottoText.slice(0, lottoText.length - 2);
      lottoText2 += "]";
      MissionUtils.Console.print(lottoText2);
    }
  }

  inputWinningLotto() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.",
      (winLotto) => {
        var tempWinLotto = winLotto.split(",").map((i) => Number(i));
        var winLottoArr = new Lotto(tempWinLotto);
        this.winningLotto = winLottoArr.getNumbers();
      }
    );
  }

  inputBonusLotto() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.",
      (bonusNum) => {
        if (bonusNum < "1" && bonusNum > "45")
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        if (bonusNum in this.winningLotto)
          throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.");
        this.bonusLottoNum = bonusNum;
      }
    );
  }

  matchWinningLotto() {
    for (var i = 0; i < this.lottoList.length; i++) {
      this.countWinningCost(
        this.countMatchLotto(this.winningLotto, this.lottoList[i]),
        this.lottoList[i]
      );
    }
  }

  countMatchLotto(winLotto, anyLotto) {
    var combineLotto = anyLotto.concat(winLotto);
    var lottoSet = new Set(combineLotto);
    var countMatch = combineLotto.length - lottoSet.size;
    return countMatch;
  }

  countWinningCost(match, anyLotto) {
    switch (match) {
      case 3:
        this.countEachWinningCost[0]++;
        break;
      case 4:
        this.countEachWinningCost[1]++;
        break;
      case 5:
        if (this.bonusLottoNum in anyLotto) {
          this.countEachWinningCost[3]++;
          break;
        }
        this.countEachWinningCost[2]++;
        break;
      case 6:
        this.countEachWinningCost[4]++;
        break;
      default:
        break;
    }
  }

  printLottoResult() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${this.countEachWinningCost[0]}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.countEachWinningCost[1]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.countEachWinningCost[2]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countEachWinningCost[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.countEachWinningCost[4]}개`
    );
  }

  calculateRevenue() {
    var totalRevenue =
      this.countEachWinningCost[0] * 5000 +
      this.countEachWinningCost[1] * 50000 +
      this.countEachWinningCost[2] * 1500000 +
      this.countEachWinningCost[3] * 30000000 +
      this.countEachWinningCost[4] * 2000000000;

    return ((totalRevenue / this.buyCost) * 100).toFixed(1);
  }

  printRevenue() {
    var revenue = this.calculateRevenue();
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.`);
    MissionUtils.Console.close();
  }

  play() {
    this.inputCost();
    this.calculateEachLotto();
    this.makeLottoList();
    this.printLottoInfo();
    this.inputWinningLotto();
    this.inputBonusLotto();
    this.matchWinningLotto();
    this.printLottoResult();
    this.printRevenue();
  }
}

module.exports = App;
