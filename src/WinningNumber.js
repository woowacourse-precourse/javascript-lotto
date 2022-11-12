const { COMMENT, REGEX } = require("./constant");
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
      if (this.#validateWinningNumbers(inputsArray)) {
        const numbersArray = inputsArray.map((input) => Number(input));
        this.#winningNumbers = numbersArray;
        this.#getBonusNumber();
      }
    });
  }

  #getBonusNumber() {
    MissionUtils.Console.readLine(COMMENT.BONUS, (number) => {
      if (this.#validateBonusNumber(number)) {
        this.#bonusNumber = Number(number);
        const lottoResult = new LottoResult(
          this.#winningNumbers,
          this.#bonusNumber,
          this.#lottos,
          this.#money
        );
        lottoResult.printLottoResult();
      }
    });
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      if (!number.match(REGEX.LOTTO_RANGE)) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }

    return true;
  }

  #validateBonusNumber(number) {
    if (this.#winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.");
    }

    if (!number.match(REGEX.LOTTO_RANGE)) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return true;
  }
}

module.exports = WinningNumber;
