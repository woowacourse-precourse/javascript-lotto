const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const BuyLottery = require("./BuyLottery");

class App {
  #amount;
  #lottos;
  #winningNumber;
  #bonusNumber;
  constructor() {
    this.buyLotto = new BuyLottery();
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (amount) => {
      MissionUtils.Console.print("구입금액을 입력해 주세요.");
      MissionUtils.Console.print(amount);
      this.#amount = amount;

      const { quentity, lottos } = this.buyLotto.buy(this.#amount);
      this.#lottos = lottos;

      this.outputPurchaseSuccess(quentity, lottos);
      this.inputOutputWinningNumber();
    });
  }

  outputPurchaseSuccess(quantity, lottos) {
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);

    let idx = 0;
    while (idx !== quantity) {
      MissionUtils.Console.print(`[${lottos[idx].join(", ")}]`);
      idx += 1;
    }
  }

  inputOutputWinningNumber() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningNumber) => {
        MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
        MissionUtils.Console.print(`${winningNumber}`);
        this.#winningNumber = winningNumber;

        MissionUtils.Console.readLine(
          "보너스 번호를 입력해 주세요.",
          (bonusNumber) => {
            MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
            MissionUtils.Console.print(`${bonusNumber}`);
            this.#bonusNumber = bonusNumber;

            this.outputStatistics();
          }
        );
      }
    );
  }

  outputStatistics() {
    this.lotto = new Lotto(this.#winningNumber.split(","));
    const { totalRankCount, statistics } = this.lotto.compare(
      this.#lottos,
      this.#bonusNumber
    );

    MissionUtils.Console.print("당첨통계");
    MissionUtils.Console.print("---");

    const winningsMent = [
      [5, "3개 일치 (5,000원) - "],
      [4, "4개 일치 (50,000원) - "],
      [3, "5개 일치 (1,500,000원) - "],
      [2, "5개 일치, 보너스 볼 일치 (30,000,000원) - "],
      [1, "6개 일치 (2,000,000,000원) - "],
    ];

    winningsMent.forEach((ment) => {
      MissionUtils.Console.print(`${ment[1]}${totalRankCount[ment[0]]}개`);
    });

    MissionUtils.Console.print(
      `총 수익률은 ${((statistics / Number(this.#amount)) * 100).toFixed(
        1
      )}%입니다.`
    );
    MissionUtils.Console.close();
  }
}

module.exports = App;
