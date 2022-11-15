const { COMMENT, VALUE } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");
const WinningNumber = require("./WinningNumber");

class Money {
  startLottoGame() {
    MissionUtils.Console.readLine(COMMENT.PURCHASE, (money) => {
      if (this.validateMoney(money)) {
        const numberOfLottos = money / VALUE.MONEY_UNIT;
        const lottos = this.createLottos(numberOfLottos);
        new WinningNumber(lottos, money).enterWinningNumbers();
      }
    });
  }

  validateMoney(money) {
    if (!money) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 금액을 입력해주세요.");
    }
    if (money < VALUE.MONEY_UNIT) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 금액이 부족합니다.");
    }
    if (money % VALUE.MONEY_UNIT != 0) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해 주세요.");
    }
    return true;
  }

  createLottos(number) {
    const lottosArray = [];
    MissionUtils.Console.print("\n" + number + "개를 구매했습니다.");

    [...Array(number)].forEach(() => {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        VALUE.NUMBER_OF_START,
        VALUE.NUMBER_OF_END,
        VALUE.NUMBER_OF_LOTTO
      );
      MissionUtils.Console.print("[" + lotto.join(", ") + "]");
      lottosArray.push(lotto);
    });

    return lottosArray;
  }
}

module.exports = Money;
