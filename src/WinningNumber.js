const { COMMENT, REGEX, VALUE } = require("./constant");
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

  enterWinningNumbers() {
    MissionUtils.Console.readLine(COMMENT.WINNING, (numberString) => {
      const inputsArray = numberString.split(",");
      if (this.validateWinningNumbers(inputsArray)) {
        this.#winningNumbers = inputsArray.map((input) => Number(input));
        this.#enterBonusNumber();
      }
    });
  }

  #enterBonusNumber() {
    MissionUtils.Console.readLine(COMMENT.BONUS, (number) => {
      if (this.validateBonusNumber(Number(number))) {
        this.#bonusNumber = Number(number);
        new LottoResult(
          this.#winningNumbers,
          this.#bonusNumber,
          this.#lottos,
          this.#money
        ).printLottoResult();
      }
    });
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== VALUE.NUMBER_OF_LOTTO) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 당첨 번호의 개수는 6개입니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if ([...uniqueNumbers].length !== VALUE.NUMBER_OF_LOTTO) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }

    numbers.forEach((number) => {
      this.#checkLottoRange(number.toString());
    });

    return true;
  }

  validateBonusNumber(number) {
    if (this.#winningNumbers.includes(number)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.");
    }

    this.#checkLottoRange(number.toString());

    return true;
  }

  #checkLottoRange(number) {
    if (!number.match(REGEX.LOTTO_RANGE)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

module.exports = WinningNumber;
