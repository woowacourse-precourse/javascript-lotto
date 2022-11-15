class Error {
  isDividedByTen(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 금액을 입력하지 않았습니다.');
    }

    return true;
  }
}

module.exports = Error;