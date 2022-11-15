const MissionUtils = require("@woowacourse/mission-utils");
const keys = require("./utils/key");
const CustomError = require("./CustomError");
const ExceptionCheck = require("./ExceptionCheck");
const ErrorMessage = require("./utils/const/error");
class Lotto {
  #numbers = null;

  constructor() {
    const lottoNumber = this.constructor.createLotteryNumber();
    if (this.constructor.validate(lottoNumber)) {
      this.#numbers = lottoNumber;
    }
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  static validate(lottoNumbers) {
    if (new LottoExceptionCheck().check(keys.lotto.lotteryNumber, lottoNumbers))
      return true;
    else return false;
  }

  static createLotteryNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort((a, b) => a - b);
  }

  winningConfrim(winninglottoNumber) {
    if (!this.#numbers)
      throw new CustomError(ErrorMessage.lottoNumberNonexistence);

    const { lottery: winningLottery = [], bonus: winningBonus = 0 } =
      winninglottoNumber;

    if (
      !new LottoExceptionCheck().check(
        keys.lotto.lottoNumber,
        winninglottoNumber
      )
    )
      throw new CustomError(ErrorMessage.notLottoNumber);

    const correct = this.#lotteryCheck(winningLottery);
    const isBonusCorrect = this.#bonusCheck(winningBonus);
    const winningConfrimResult = { correct, isBonusCorrect };
    return winningConfrimResult;
  }

  #lotteryCheck(winningLottery) {
    let count = 0;
    for (let winning of winningLottery) {
      for (let number of this.#numbers) {
        if (winning === number) count++;
      }
    }
    return count;
  }
  #bonusCheck(winningBonus) {
    for (let number of this.#numbers) {
      if (number === winningBonus) return true;
    }
    return false;
  }
}

class LottoExceptionCheck extends ExceptionCheck {
  constructor() {
    super();
  }
  lotteryNumber(lottery) {
    super.isArray(lottery);
    super.isRightLength(lottery, 6);
    super.isOverLapArray(lottery);
    super.isSortedArray(lottery);
    lottery.forEach((num, i, arr) => {
      super.isNumberInRange(num);
    });
    return true;
  }

  lottoNumber(lottoNumber) {
    const { lottery = [], bonus = 0 } = lottoNumber;
    super.isBonusNumber(lottery, bonus);
    super.isRightLength(lottery, 6);

    super.isArray(lottery);
    super.isRightLength(lottery, 6);
    super.isOverLapArray(lottery);
    super.isSortedArray(lottery);
    lottery.forEach((num, i, arr) => {
      super.isNumberInRange(num);
    });

    return true;
  }
  bonusNumber(bonusNumber, lottery) {
    super.isBonusNumber(lottery, bonusNumber);
  }
}

module.exports = Lotto;
