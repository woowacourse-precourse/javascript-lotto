const Validator = require('./Validator');

class Validation {
  /**
   * @param {Object} validateInfo 사용할 validator이름과 검사 항목을 작성
   * @param {String} checkElement 유효성 검사할 대상
   * @return {} 유효성 검사의 결과가 참이면 매개변수 반환, 거짓이면 오류 메세지 반환한다.
   */
  #validatorName;
  #validateInfo;
  #checkElement;

  constructor(validationInfo, checkElement) {
    const { VALIDATORNAME, VALIDATIONINFOMATION } = validationInfo;
    this.#validatorName = VALIDATORNAME;
    this.#validateInfo = VALIDATIONINFOMATION;
    this.#checkElement = checkElement;
  }

  showResult() {
    const message = this.#validate(this.#validatorName, this.#checkElement, this.#validateInfo);
    return message.length ? this.#makeError(message.join(' ')) : this.#checkElement;
  }

  #validate(validationList, checkElement, validateInfo) {
    return validationList
      .map((name) => Validator[name](checkElement, validateInfo))
      .filter((isErrorMessage) => isErrorMessage !== true);
  }

  #makeError(errorMessage) {
    throw new Error(errorMessage);
  }
}

module.exports = Validation;
