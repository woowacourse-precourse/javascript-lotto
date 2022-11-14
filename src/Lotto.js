const { LOTTO_DETAILS, ERROR } = require("./constant/constant");
const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./utils/Validation");
const { RANK } = LOTTO_DETAILS;

class Lotto {
  #numbers;

  constructor(numbers, userLottoArr) {
    this.validate(numbers);
    this.getBonusNumber(userLottoArr);
  }

  validate(numbers) {
    const splitNumbers = numbers.split(",");
    Validation.isNumber(splitNumbers.join(""));
    Validation.isLottoInput(splitNumbers);
    Validation.isOverlap(splitNumbers);
    splitNumbers.forEach((lottoNumber) => {
      Validation.isLottoVariable(Number(lottoNumber));
    });

    const toNumberSplitNumbers = splitNumbers.map((string) => Number(string));
    this.#numbers = toNumberSplitNumbers;
  }

  validateBonusNumber(bonusNumber) {
    Validation.isNumber(bonusNumber);
    const toNumberBonusNumber = Number(bonusNumber);

    Validation.isLottoVariable(toNumberBonusNumber);
  }

  getBonusNumber(userLottoArr) {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      const toNumberBonusNumber = Number(bonusNumber);
      this.validateBonusNumber(toNumberBonusNumber);
      const winningBoard = this.calculate(toNumberBonusNumber, userLottoArr);
    });
  }

  calculate(bonusNumber, userLottoArr) {
    const winningBoard = {
      FIFTH: 0,
      FORTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    userLottoArr.forEach((lotto) => {
      const intersection = lotto.filter((x) =>
        this.#numbers.includes(x)
      ).length;

      if (intersection < RANK.FIFTH) return;

      if (intersection === RANK.THIRD && lotto.includes(bonusNumber)) {
        winningBoard.SECOND += 1;
        return;
      }

      winningBoard[this.checkWinning(intersection)] += 1;
    });
    return winningBoard;
  }

  checkWinning(intersection) {
    switch (intersection) {
      case RANK.FIFTH:
        return "FIFTH";
      case RANK.FORTH:
        return "FORTH";
      case RANK.THIRD:
        return "THIRD";
      case RANK.FIRST:
        return "FIRST";
      default:
        throw new Error(ERROR.WRONG_ROUTE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
