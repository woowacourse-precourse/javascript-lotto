const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.randomLottoNums = [];
    this.correctLottoNums = [];
    this.bonusNumber = 0;
    this.earningRate = 0;
    this.input = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      const inputChange = Number(input);
      if (isNaN(inputChange)) throw new Error("[ERROR] 숫자를 입력해주세요.");
      if (input % 1000 !== 0)
        throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 합니다.");
      this.input = input;
      const lottoCount = input / 1000;
      Console.print(`${lottoCount}개를 구매했습니다.`);

      this.correctLottoNums = Array(lottoCount)
        .fill([])
        .map(() => {
          const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
            (a, b) => a - b,
          );
          Console.print(lottoNum);
          return lottoNum;
        });

      this.getCorrectLottoNums();
    });
  }

  getCorrectLottoNums() {
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.getBonusLottoNums();
    }); // ,로 구분
  }

  getBonusLottoNums() {
    Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.getEarningRate();
    });
  }

  getEarningRate() {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`총 수익률은 ${this.earningRate}%입니다.`);
    Console.close();
  }

  // 구입 금액 입력
  // 로또 번호 입력 받음
  // 보너스 번호 입력 받음
  // 수익률 계산
  // 수익률을 보여줌
}

const app = new App();
app.play();

// module.exports = App;
