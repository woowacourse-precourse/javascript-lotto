const MissionUtils = require("@woowacourse/mission-utils");

const UserLottos = require("./UserLottos");
const Lotto = require("./Lotto");

class LottoGame {
  isNumber(number) {
    return !isNaN(number);
  }

  isThousandUnit(number) {
    if (this.isNumber(number)) {
      return !!(number % 1000 === 0);
    }
  }

  validatePurchaseLotto(number) {
    if (!this.isThousandUnit(number)) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위여야 합니다.");
    }
  }

  printTheNumberOfLotto(lottos, number) {
    lottos.setTheNumberOfLotto(number / 1000);
    MissionUtils.Console.print(
      `${lottos.getTheNumberOfLotto()}개를 구매했습니다.`
    );
  }

  createLotto(lottos) {
    lottos.setLottos();
    lottos.getLottos().forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  receiveLottoNumbers(lottos, money) {
    MissionUtils.Console.readLine("당첨번호를 입력해 주세요.\n", (number) => {
      const winningLotto = new Lotto(number.split(",").map(Number));
      const wonLotto = winningLotto.getNumbers();
    });
  }

  game() {
    const lottos = new UserLottos();

    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validatePurchaseLotto(money);

      this.printTheNumberOfLotto(lottos, money);

      this.createLotto(lottos);

      this.receiveLottoNumbers(lottos, money);
    });
  }
}

module.exports = LottoGame;
