const CustomError = require("./CustomError");
const ErrorMessage = require("./utils/const/error");

class ExceptionCheck {
  #exceptionCheckmethodList;

  constructor() {
    this.#setexceptionCheckMethodList();
  }
  #setexceptionCheckMethodList() {
    const methodCandidate = Object.getPrototypeOf(this);
    delete methodCandidate.constructor;
    this.#exceptionCheckmethodList = methodCandidate;
  }

  #isMethodIn(exceptionType) {
    if (this.#exceptionCheckmethodList?.[exceptionType]) return true;
    else return false;
  }
  check(exceptionType, checkTarget, exceptCheckparam) {
    if (!this.#isMethodIn(exceptionType))
      throw new CustomError(
        `${exceptionType}에 대한 예외체크 메서드를 만들지 않았습니다`
      );
    const checkMethod = this.#exceptionCheckmethodList[exceptionType];
    return checkMethod(checkTarget, exceptCheckparam);
  }

  isNumber(test) {
    if (!Number(test)) throw new CustomError(ErrorMessage.notNumber);
  }
  isPositiveNumber(test) {
    if (test < 0) throw new CustomError(ErrorMessage.notPositiveNumber);
  }
  isArray(test) {
    if (!Array.isArray(test)) {
      throw new CustomError(ErrorMessage.notNumberArray);
    }
  }
  isRightLength(test, length) {
    if (test.length !== length)
      throw new CustomError(ErrorMessage.numberListLengthMustSix);
  }
  isSortedArray(array) {
    array.forEach((num, i, arr) => {
      if (i == 0) return;
      if (arr[i - 1] > arr[i]) {
        throw new CustomError(ErrorMessage.notSortedNumberList);
      }
    });
  }
  isNumberInRange(test) {
    const lottoNumReg = /(^[1-9]$)|(^[1-3]{1}[0-9]{1}$)|(^4{1}[0-5]{1}$)/;
    if (!lottoNumReg.test(test))
      throw new CustomError(ErrorMessage.notNumberInRange);
  }
  isBonusNumber(lotteryNumberArray, bonusNumber) {
    const lottoNumReg = /(^[1-9]$)|(^[1-3]{1}[0-9]{1}$)|(^4{1}[0-5]{1}$)/;
    if (!lottoNumReg.test(bonusNumber))
      throw new CustomError(ErrorMessage.notInRangeNumber);
    if (!Array.isArray(lotteryNumberArray))
      throw new CustomError(ErrorMessage.notNumberArray);
    if (lotteryNumberArray.includes(Number(bonusNumber)))
      throw new CustomError(ErrorMessage.notBonusNumber);
    return true;
  }
  isOverLapArray(array) {
    const overLap = {};
    array.forEach((num) => {
      overLap[num] ? (overLap[num] += 1) : (overLap[num] = 1);
      if (overLap[num] > 1) throw new CustomError(ErrorMessage.overLapNumber);
    });
  }
  isError(condition, message) {
    if (condition) {
      throw new CustomError(message);
    }
  }
}

module.exports = ExceptionCheck;
