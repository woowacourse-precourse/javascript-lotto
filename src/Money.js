const { COMMENT } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");
const WinningNumber = require("./WinningNumber");

class Money {
  startLottoGame() {
    MissionUtils.Console.readLine(COMMENT.PURCHASE, (money) => {
      if (this.validateMoney(money)) {
        const numberOfLottos = money / 1000;
        const lottos = this.#createLottos(numberOfLottos);
        new WinningNumber(lottos, money).enterWinningNumbers();
      }
    });
  }

  validateMoney(money) {
    if (!money) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 금액을 입력해주세요.");
    }
    if (money < 1000) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 금액이 부족합니다.");
    }
    if (money % 1000 != 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
    }
    return true;
  }

  #createLottos(number) {
    const lottosArray = [];
    MissionUtils.Console.print("\n" + number + "개를 구매했습니다.");

    [...Array(number)].forEach(() => {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print("[" + lotto.join(", ") + "]");
      lottosArray.push(lotto);
    });

    return lottosArray;
  }
}

module.exports = Money;
