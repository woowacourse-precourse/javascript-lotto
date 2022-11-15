const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyLotto = 0;
    this.userLottoNumbers = [];
    this.lottoNumber = [];
    this.bonusNumber;
    this.checkResultRank = {
      First: 0,
      Second: 0,
      Third: 0,
      Fourth: 0,
      Fifth: 0,
    };
  }

  play() {
    this.userBuyLotto();
  }

  userBuyLotto() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요. \n",
      (buyLotto) => {
        this.buyLotto = buyLotto;
        this.userBuyLottoCheck(this.buyLotto);
      }
    );
  }

  userBuyLottoCheck(buyLotto) {
    if (this.buyLotto % 1000 !== 0) {
      throw new Error("[ERROR] 알맞는 금액을 입력해 주세요.");
    }
    this.buyLotto = parseInt(buyLotto);
    this.userLottoNumber(this.buyLotto / 1000);
  }

  userLottoNumber(buyCount) {
    MissionUtils.Console.print(`\n ${buyCount}개를 구매했습니다.`);
    for (let i = 0; i < buyCount; i++) {
      this.userLottoNumbers[i] = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);

      MissionUtils.Console.print(
        `[${this.userLottoNumbers[i][0]}, ${this.userLottoNumbers[i][1]}, ${this.userLottoNumbers[i][2]}, ${this.userLottoNumbers[i][3]}, ${this.userLottoNumbers[i][4]}, ${this.userLottoNumbers[i][5]}]`
      );
    }
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (lottoNumber) => {
        this.lottoNumber = lottoNumber.split(",").map(Number);
        new Lotto(this.lottoNumber);
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (bonusNumber) => {
        this.bonusNumber = bonusNumber;
        this.validateBonus(this.bonusNumber);
      }
    );
  }

  validateBonus(bonusNumber) {
    MissionUtils.Console.print(bonusNumber, this.lottoNumber);
    if (!(1 <= bonusNumber && bonusNumber <= 45) && isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.");
    }
    if (this.lottoNumber.indexOf(parseInt(bonusNumber)) !== -1) {
      throw new Error("[ERROR] 당첨 번호와 중복되지 않은 숫자여야 합니다.");
    }
    this.bonusNumber = parseInt(bonusNumber);
    this.checkNumberCount(this.userLottoNumbers, this.lottoNumber);
  }

  checkNumberCount(userLottoNumbers, lottoNumber) {
    userLottoNumbers.forEach((eachLottoList) => {
      let count = 0;
      count = eachLottoList.filter((eachLottoNumber) =>
        lottoNumber.includes(eachLottoNumber)
      ).length;
      this.checkResult(eachLottoList, this.bonusNumber, count);
    });
    this.resultRate(this.buyLotto, this.checkResultRank);
  }

  checkResult(eachLottoList, bonusNumber, count) {
    switch (count) {
      case 3:
        this.checkResultRank.Fifth++;
        break;
      case 4:
        this.checkResultRank.Fourth++;
        break;
      case 5:
        if (!eachLottoList.includes(bonusNumber)) {
          this.checkResultRank.Third++;
          break;
        }
        this.checkResultRank.Second++;
        break;
      case 6:
        this.checkResultRank.First++;
        break;
    }
  }

  resultRate(buyLotto, checkResultRank) {
    let rate =
      (checkResultRank.Fifth * 5000 +
        checkResultRank.Fourth * 50000 +
        checkResultRank.Third * 1500000 +
        checkResultRank.Second * 30000000 +
        checkResultRank.First * 2000000000) /
      buyLotto;
    rate = (rate * 100).toFixed(1);
    rate = rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.resultMessage(this.checkResultRank, rate);
  }

  resultMessage(checkResultRank, rate) {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${checkResultRank.Fifth}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${checkResultRank.Fourth}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${checkResultRank.Third}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${checkResultRank.Second}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${checkResultRank.First}개`
    );
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
