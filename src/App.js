const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Money = require("./Money");
const LottoGanerator = require("./LottoGenerator");
const Bonus = require("./Bonus");

class App {
  play() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요." + "\n",
      (moneyAnswer) => {
        const money = new Money(moneyAnswer);
        const lottoCount = money.divideMoney(money.money);
        MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);

        const lottoGenerator = new LottoGanerator();
        const lottoNumbers = lottoGenerator.createLottoNumbers(lottoCount);

        lottoNumbers.forEach((lotto) => {
          lotto = lotto.join(", ");
          MissionUtils.Console.print(`[${lotto}]`);
        });

        MissionUtils.Console.print("\n");

        this.enterWinningNumber(lottoNumbers, lottoCount);
      }
    );
  }

  enterWinningNumber(lottoNumbers, lottoCount) {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요." + "\n",
      (answer) => {
        const winningAnswer = answer.split(",").map((item) => +item);
        MissionUtils.Console.print("\n");
        this.enterBonusNumber(winningAnswer, lottoNumbers, lottoCount);
      }
    );
  }

  enterBonusNumber(winningAnswer, lottoNumbers, lottoCount) {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요." + "\n",
      (bonusAnswer) => {
        const lotto = new Lotto(winningAnswer);
        const bonus = new Bonus(bonusAnswer);
        lotto.validateBonus(bonus.number);

        MissionUtils.Console.print("\n");

        const judgement = lotto.judgement(
          lottoNumbers,
          winningAnswer,
          bonus.number,
          lottoCount
        );

        const result = lotto.printResult(judgement);
        result.forEach((item) => {
          MissionUtils.Console.print(item);
        });
        MissionUtils.Console.close();
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
