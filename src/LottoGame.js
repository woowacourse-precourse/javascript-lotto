const MissionUtils = require("@woowacourse/mission-utils");

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

  game() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.validatePurchaseLotto(money);
    });
  }
}

module.exports = LottoGame;
