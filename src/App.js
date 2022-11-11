const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.totalLottoNumber = [];
    this.payMoney = 0;
    this.winnerNumber;
    this.bonusNumber;
  }
  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.payMoney = money;
      if (this.payMoney % 1000 !== 0 || this.payMoney === "0")
        throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");

      this.getLottoNumber(this.payMoney / 1000);
      this.inputWinnerNumber();
    });
  }

  getLottoNumber(lottoTickets) {
    MissionUtils.Console.print(`\n${lottoTickets}개를 구매했습니다.`);
    for (let i = 0; i < lottoTickets; i++) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomNumber);
      this.totalLottoNumber.push(lotto.sortLotto(randomNumber));
    }
  }

  inputWinnerNumber() {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (number) => {
      if (number.split(",").length !== 6) {
        throw new Error("[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요");
      }
      this.winnerNumber = number.replace(/\s/g, "").split(",");
      if (new Set(this.winnerNumber).size !== 6) {
        throw new Error("[ERROR] 중복없이 숫자를 입력해주세요.");
      }
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      if (number < 1 || number > 45) {
        throw new Error("1에서 45까지의 번호를 입력해주세요");
      }
      this.bonusNumber = number;
    });
  }
}

const app = new App();
app.play();
module.exports = App;
