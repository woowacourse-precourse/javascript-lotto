const { Random } = require("@woowacourse/mission-utils");
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
  }

  static createLotteryNumber() {
    const lottoNumber = [];
    while (lottoNumber.length < 6) {
      const randomNumber = Random.pickNumberInRange(1, 45);
      if (lottoNumber.includes(randomNumber)) continue;
      lottoNumber.push(Number(randomNumber));
    }
    return lottoNumber.sort((a, b) => a - b);
  }

  static validate(lottoNumbers) {
    return new LottoExceptionCheck().check(
      keys.lotto.lotteryNumber,
      lottoNumbers
    );
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
  }
}

class LottoExceptionCheck extends ExceptionCheck {
  lotteryNumber(lottery) {
    const lottoNumReg = /(^[1-9]$)|(^[1-3]{1}[0-9]{1}$)|(^4{1}[0-5]{1}$)/;
    const overLap = {};
    if (!Array.isArray(lottery)) {
      throw new CustomError(ErrorMessage.notNumberArray);
    }
    if (lottery.length !== 6)
      throw new CustomError(ErrorMessage.numberListLengthMustSix);
    lottery.forEach((num, i, arr) => {
      overLap[num] ? (overLap[num] += 1) : (overLap[num] = 1);
      if (!lottoNumReg.test(num))
        throw new CustomError(ErrorMessage.notNumberInRange);
      if (typeof num != "number") throw new CustomError(ErrorMessage.notNumber);
      if (overLap[num] > 1) throw new CustomError(ErrorMessage.overLapNumber);
      if (i == 0) return;
      if (arr[i - 1] > arr[i]) {
        throw new CustomError(ErrorMessage.notSortedNumberList);
      }
    });
  }

  lottoNumber(lottoNumber) {
    const { lottery = [], bonus = 0 } = lottoNumber;

    if (!(bonus || typeof bonus !== "number"))
      throw new CustomError(ErrorMessage.notBonusNumber);

    if (lottery.length !== 6)
      throw new CustomError(ErrorMessage.numberListLengthMustSix);

    if (!this.lotteryNumber(lottery)) {
      throw new CustomError(ErrorMessage.notLotteryNumber);
    }

    if (!this.bonusNumber(bonus)) {
      throw new CustomError(ErrorMessage.notBonusNumber);
    }
    return true;
  }
  bonusNumber(bonusNumber, lottery) {
    if (!(bonus || typeof bonus !== "number"))
      throw new CustomError(ErrorMessage.notBonusNumber);

    if (lottery.includes(bonusNumber))
      throw new CustomError(ErrorMessage.notBonusNumber);
  }
}

module.exports = Lotto;
