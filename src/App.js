const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const winstatistics = require("../src/statistics");

class App {
  constructor() {
    this.buyCost = 0;
    this.myLotto = [];
    this.winLotto = undefined;
    this.bonusNum = 0;
  }

  costValidation(cost) {
    if (parseInt(cost) % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 금액을 맞춰주세요.");
    }
    if (isNaN(cost)) {
      throw new Error("[ERROR] 숫자로 입력해주세요.");
    }

    return cost;
  }

  getLottoTicketCount(cost) {
    let ticketCount = 0;
    ticketCount = cost / 1000;
    return ticketCount;
  }

  getLottoSort(lottoNumber) {
    lottoNumber.sort((x, y) => x - y);
  }

  getLottoNum(lottoCount) {
    let str = "";

    for (let i = 0; i < lottoCount; i++) {
      let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.getLottoSort(lottoNumber);
      this.myLotto.push(lottoNumber);

      for (let j = 0; j < 6; j++) {
        str += String(this.myLotto[i][j]) + ", ";
      }

      const newStr = str.substring(0, str.length - 2);
      MissionUtils.Console.print(`[${newStr}]`);
      str = "";
    }
  }

  commaValidation(number) {
    if (number.split(",").length - 1 !== 5) {
      throw new Error("[ERROR] 콤마의 개수를 5개로 맞춰주세요.");
    }
  }

  putWinLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (number) => {
      this.commaValidation(number);
      let winNum = number.split(",", 6).map(function (item) {
        return parseInt(item, 10);
      });
      this.winLotto = new Lotto(winNum);
      this.putBonusNum();
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

  putBonusNum() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.\n",
      (number) => {
        this.bonusValidation(parseInt(number));
        this.bonusNum = parseInt(number);
        this.printWinContent();
      }
    );
  }

  equalLotto(lotto) {
    let equal = {
      equalNumCount: 0,
      equalBonus: 0,
    };
    for (let num of lotto) {
      if (this.winLotto.includes(num)) {
        equal.equalNumCount += 1;
      }
      if (this.bonusNum === num) {
        equal.equalBonus += 1;
      }
    }
    return equal;
  }

  winCost(winContent) {
    const equalNumCount = winContent.equalNumCount;
    const equalBonus = winContent.equalBonus;

    if (equalNumCount + equalBonus === 3) {
      winstatistics["3개 일치 (5,000원)"] += 1;
    }

    if (equalNumCount + equalBonus === 4) {
      winstatistics["4개 일치 (50,000원)"] += 1;
    }

    if (equalNumCount + equalBonus === 5) {
      winstatistics["5개 일치 (1,500,000원)"] += 1;
    }

    if (equalNumCount === 5 && equalBonus === 1) {
      winstatistics["5개 일치, 보너스 볼 일치 (30,000,000원)"] += 1;
    }

    if (equalNumCount === 6) {
      winstatistics["6개 일치 (2,000,000,000원)"] += 1;
    }
  }

  printWinContent() {
    this.winLotto = this.winLotto.getWinLotto();
    this.myLotto.forEach((lotto) => {
      this.winCost(this.equalLotto(lotto));
    });

    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    for (let item in winstatistics) {
      MissionUtils.Console.print(`${item} - ${winstatistics[item]}개`);
    }
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      this.buyCost = this.costValidation(cost);
      const lottoCount = this.getLottoTicketCount(this.buyCost);

      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      this.getLottoNum(lottoCount);

      this.putWinLotto();
    });
  }
}

const app = new App();
app.play();
module.exports = App;
