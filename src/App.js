const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  constructor() {
    this.buyCost = 0;
    this.myLotto = [];
    this.winLotto = undefined;
    this.bonusNum = 0;
  }

  costValidation(cost) {
    if (cost % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 금액을 맞춰주세요.");
    }
    return cost;
  }

  getLottoTicketCount(cost) {
    let ticketCount = 0;
    ticketCount = cost / 1000;
    return ticketCount;
  }

  getLottoSort(lottoNumber) {
    lottoNumber.sort(function (x, y) {
      return x - y;
    });
  }

  getLottoNum(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.getLottoSort(lottoNumber);
      this.myLotto.push(lottoNumber);
      MissionUtils.Console.print(this.myLotto[i]);
    }
  }

  winNumValidation(winNum) {
    const set = new Set(winNum);

    for (let number of winNum) {
      if (number < 1 || 45 < number) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }

    if (set.size !== winNum.length) {
      throw new Error("[ERROR] 중복되지 않는 번호로 입력하세요.");
    }
  }

  commaValidation(number) {
    if (number.split(",").length - 1 !== 5) {
      throw new Error("[ERROR] 콤마의 개수를 5개로 맞춰주세요.");
    }
  }

  getWinLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (number) => {
      this.commaValidation(number);
      let winNum = number.split(",", 6).map(function (item) {
        return parseInt(item, 10);
      });
      this.winNumValidation(winNum);
      this.winLotto = new Lotto(winNum);
      this.getBonusNum();
    });
  }

  bonusValidation(bonusNum) {
    if (this.winLotto.getWinLotto().includes(bonusNum)) {
      throw new Error("[ERROR] 당첨 번호와 겹치지 않는 번호로 입력하세요.");
    }
    if (bonusNum < 1 || 45 < bonusNum) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getBonusNum() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (number) => {
        this.bonusValidation(parseInt(number));
        this.bonusNum = parseInt(number);
      }
    );
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      this.buyCost = this.costValidation(parseInt(cost));
      const lottoCount = this.getLottoTicketCount(this.buyCost);

      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      this.getLottoNum(lottoCount);

      this.getWinLotto();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
