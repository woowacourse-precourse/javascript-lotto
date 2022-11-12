const { COMMENT, ERROR, REGEX } = require("./constant");
const MissionUtils = require("@woowacourse/mission-utils");
const LottoResult = require("./LottoResult");

class WinningNumber {
  #lottos;
  #money;
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, money) {
    this.#lottos = lottos;
    this.#money = money;
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  getWinningNumbers() {
    MissionUtils.Console.readLine(COMMENT.WINNING, (numberString) => {
      const inputsArray = numberString.split(",");
      if (this.#checkValidNumbers(inputsArray)) {
        const numbersArray = inputsArray.map((input) => Number(input));
        this.#winningNumbers = numbersArray;
        this.#getBonusNumber();
      }
    });
  }

  #getBonusNumber() {
    MissionUtils.Console.readLine(COMMENT.BONUS, (number) => {
      this.#bonusNumber = number;
      const lottoResult = new LottoResult(
        this.#winningNumbers,
        this.#bonusNumber,
        this.#lottos,
        this.#money
      );
      lottoResult.printLottoResult();
    });
    //TODO: 보너스 번호 유효 판별
  }
}

module.exports = WinningNumber;
