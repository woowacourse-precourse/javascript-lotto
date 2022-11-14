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
      throw new Error("알맞는 금액을 입력해 주세요.");
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
        this.bonusNumber = parseInt(bonusNumber);
        this.validateBonus(this.bonusNumber);
      }
    );
  }

  validateBonus(bonusNumber) {
    if (!(1 <= bonusNumber && bonusNumber <= 45)) {
      throw new Error("로또 번호는 1부터 45사이의 숫자여야 합니다.");
    }
    if (this.lottoNumber.includes(bonusNumber)) {
      throw new Error("당첨 번호와 중복되지 않은 숫자여야 합니다.");
    }
    this.checkNumberCount(this.userLottoNumbers, this.lottoNumber);
  }
  }

}

module.exports = App;
