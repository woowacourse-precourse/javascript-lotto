const MissionUtils = require("@woowacourse/mission-utils");
const ErrorCase = require("./ErrorCase");

const CASH_INPUT_MESSAGE = "구입금액을 입력해 주세요.\n";
const PURCHASE_AMOUNT_NOTICE_MESSAGE = "개를 구매했습니다.";

const CASH_INPUT_ERROR_MESSAGE = "[ERROR] 잘못된 금액입니다. 금액은 숫자로 입력해주세요.";

const getCashInput = () => {
  return new Promise((resolve, reject) =>
    MissionUtils.Console.readLine(CASH_INPUT_MESSAGE, (cashInput) => {
      const isWrongInput = ErrorCase.isWrongCashInput(cashInput);
      if (isWrongInput) reject();

      resolve(cashInput);
    })
  );
};

class UI {
  static async getCash() {
    try {
      const cash = await getCashInput();
      return cash;
    } catch {
      throw new Error(CASH_INPUT_ERROR_MESSAGE);
    }
  }

  static printPurchasedLottoAmount(purchased) {
    MissionUtils.Console.print(purchased.amount + PURCHASE_AMOUNT_NOTICE_MESSAGE);
  }

  static printPurchasedLottoList(purchased) {
    purchased.lottoArray.forEach((lotto) => {
      const lottoNumbers = lotto.showNumbers();
      MissionUtils.Console.print(lottoNumbers);
    });
  }
}

module.exports = UI;
