const MissionUtils = require('@woowacourse/mission-utils"');

class InputView {
  static getInputPurchaseAmount(callback) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", callback);
  }

  static getInputLottoNumbers(callback) {
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해 주세요.\n',
      callback
    );
  }

  static getInputBonusNumber(callback) {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', callback);
  }
}

module.exports = InputView;
