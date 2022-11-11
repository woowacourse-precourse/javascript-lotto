class InputValid {
  isThousandUnits(lottoCost) {
    if (+lottoCost % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
    return true;
  }
}

module.exports = InputValid;
