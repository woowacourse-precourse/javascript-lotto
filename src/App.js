const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {
  constructor() {
    this.buyCost = 0;
    this.myLotto = [];
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

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      this.buyCost = this.costValidation(Number(cost));
      const lottoCount = this.getLottoTicketCount(this.buyCost);

      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      this.getLottoNum(lottoCount);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
