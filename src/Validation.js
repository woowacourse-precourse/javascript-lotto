class Validation {
  purchaseInputValue(inputValue) {
    const inputNumber = Number(inputValue);
    if (Number.isNaN(inputNumber)) {
      throw new Error('[ERROR] 금액을 입력해주세요.');
    }
    if (inputNumber % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }
}

module.exports = Validation;