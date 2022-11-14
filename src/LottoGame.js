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

  compareNumber(lottos, wonLotto, bonusNumber) {
    lottos.setMatchingNumber();

    wonLotto.forEach((number) => {
      lottos.getLottos().forEach((lotto, index) => {
        lotto.getNumbers().includes(number) && lottos.matchingNumber[index]++;
      });
    });

    lottos.matchingNumber.forEach((number, index) => {
      if (number === 5) {
        if (lottos.lottos[index].numbers.includes(Number(bonusNumber))) {
          lottos.matchingNumber[index] = "5+1";
        }
      }
    });
  }

  receiveLottoNumbers(lottos, money) {
    MissionUtils.Console.readLine("당첨번호를 입력해 주세요.\n", (number) => {
      const winningLotto = new Lotto(number.split(",").map(Number));
      const wonLotto = winningLotto.getNumbers();

      MissionUtils.Console.readLine(
        "보너스 번호를 입력해 주세요.\n",
        (number) => {
          winningLotto.setBonusNumber(number);
          const bonusNumber = winningLotto.getBonusNumber();

          this.compareNumber(lottos, wonLotto, bonusNumber);
        }
      );
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
