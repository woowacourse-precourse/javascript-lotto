const { print, readLine, close } = require("./Utils");
const { QUERY, MESSAGE, INPUT_ERROR_MESSAGE } = require("./Constant");
const {
  isNotMultipleOf1000,
  existIsNotNumberAndComma,
  existIsNotNumber,
} = require("./Validate");

class UI {
  static showBoughtLottos(lottoListOfUser) {
    print(`${lottoListOfUser.length}${MESSAGE.BOUGHT_LOTTOS}`);
    lottoListOfUser.forEach((lotto) => {
      print(`[${lotto.getNumbers().join(", ")}]`);
    });
    print("");
  }

  static showResult({ FIRST, SECOND, THIRD, FOURTH, FIFTH }, totalProfitRate) {
    print(MESSAGE.RESULT);
    print(`${MESSAGE.FIFTH} - ${FIFTH}개`);
    print(`${MESSAGE.FOURTH} - ${FOURTH}개`);
    print(`${MESSAGE.THIRD} - ${THIRD}개`);
    print(`${MESSAGE.SECOND} - ${SECOND}개`);
    print(`${MESSAGE.FIRST} - ${FIRST}개`);
    print(`${MESSAGE.TOTAL_PROFIT_RATE} ${totalProfitRate}${MESSAGE.PERCENT}`);
  }

  static askHowMuchBuy(callback) {
    readLine(QUERY.HOW_MUCH_BUY, (answer) => {
      this.#validateHowMuchBuyAnswer(answer);
      print("");
      callback(answer);
    });
  }

  static askWinningLottoNumbers(callback) {
    readLine(QUERY.WIN_NUMBER, (answer) => {
      this.#validateWinningLottoNumbersAnswer(answer);
      print("");
      callback(answer);
    });
  }

  static askBonusNumber(callback) {
    readLine(QUERY.BONUS_NUMBER, (answer) => {
      this.#validateBonusNumberAnswer(answer);
      print("");
      callback(answer);
    });
  }

  static closeIOstream() {
    close();
  }

  static #validateHowMuchBuyAnswer(answer) {
    if (isNotMultipleOf1000(answer)) {
      throw new Error(INPUT_ERROR_MESSAGE.ONLY_MULTIPLE_OF_1000);
    }
  }

  static #validateWinningLottoNumbersAnswer(answer) {
    if (existIsNotNumberAndComma(answer)) {
      throw new Error(INPUT_ERROR_MESSAGE.ONLY_NUMBER_AND_COMMA);
    }
  }

  static #validateBonusNumberAnswer(answer) {
    if (existIsNotNumber(answer)) {
      throw new Error(INPUT_ERROR_MESSAGE.ONLY_NUMBER);
    }
  }
}

module.exports = UI;
