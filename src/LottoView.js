const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHASE_AMOUNT_ERROR } = require("./Constants");
const { checkPurchaseAmount } = require("./Validation");

class LottoView {
  getPurchaseAmount() {
    return new Promise((resolve) => {
      this.inputPurchaseAmount(resolve);
    });
  }

  inputPurchaseAmount(resolve) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      checkPurchaseAmount(answer);
      resolve(answer);
    });
  }

  getLottoNumbers() {
    return new Promise((resolve) => {
      this.inputLottoNumbers(resolve);
    });
  }

  inputLottoNumbers(resolve) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
      resolve(answer);
      MissionUtils.Console.close();
    });
  }

  printLottos(amount, lottos) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    for (const lotto of lottos) {
      MissionUtils.Console.print(lotto.sort());
    }
  }
}

module.exports = LottoView;
