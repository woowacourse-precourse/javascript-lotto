const CustomError = require("./CustomError");

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
}

module.exports = ExceptionCheck;
