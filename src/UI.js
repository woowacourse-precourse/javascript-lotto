const MissionUtils = require("@woowacourse/mission-utils");
const ErrorCase = require("./ErrorCase");

const CASH_INPUT_MESSAGE = "구입금액을 입력해 주세요.\n";
const CASH_INPUT_ERROR_MESSAGE = "잘못된 금액입니다.";

const getCashInput = () => {
  return new Promise((resolve, reject) =>
    MissionUtils.Console.readLine(CASH_INPUT_MESSAGE, (cashInput) => {
      const isWrongInput = ErrorCase.isWrongCash(cashInput);
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
}

module.exports = UI;
