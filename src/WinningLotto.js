const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");

class WinningLotto {
  constructor(numbers) {}

  checkWinningNumber(lottoNumber) {
    const lottoArray = lottoNumber.split(",");
    if (!this.checkLottoLength(lottoArray)) {
      return { result: false, errorMessage: messages.TOTAL_NUMBER_ERROR };
    }
    if (!this.checkLottoIsNumber(lottoArray)) {
      return { result: false, errorMessage: messages.NOT_A_NUMBER_ERROR };
    }
    return { result: true };
  }

  checkLottoLength(lotto) {
    if (lotto.length !== terms.NUMBERS_LENGTH) {
      return false;
    }
    return true;
  }

  checkLottoIsNumber(lotto) {
    if (lotto.every((number) => isNaN(number))) {
      return false;
    }
    return true;
  }
}

module.exports = WinningLotto;
