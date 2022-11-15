const checkError = {
  isDivideZero(value) {
    if (value % 1000 === 0) {
      return true;
    }
    throw new Error(
      '[ERROR] 구입 금액은 1,000원 단위로 나누어 떨어져야 합니다.',
    );
  },
};

module.exports = checkError;
