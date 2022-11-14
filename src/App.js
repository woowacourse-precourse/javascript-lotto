const Lotto = require("./Lotto.js");
const { Console, Random } = require("@woowacourse/mission-utils");
class App {
  randomLottoNums = [];
  correctLottoNums = {};

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      const inputChange = Number(input);
      if (isNaN(inputChange)) throw new Error("[ERROR] 숫자를 입력해주세요.");
      if (input % 1000 !== 0)
        throw new Error("[ERROR] 금액은 1000원 단위로 입력해야 합니다.");
      const lottoCount = input / 1000;
      Console.print(`${lottoCount}개를 구매했습니다.`);

      this.correctLottoNums = Array(lottoCount)
        .fill([])
        .map((lotto) => {
          const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
            (a, b) => a - b,
          );
          Console.print(lottoNum);
          return lottoNum;
        });
    });
    Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      console.log(input); // 여기서 보너스 번호까지 받음.
    });
  }
}

const app = new App();
app.play();

// module.exports = App;
