const checkError = {
  isDivideZero(value) {
    if (value % 1000 === 0) {
      return true;
    }
    throw new Error(
      '[ERROR] 구입 금액은 1,000원 단위로 나누어 떨어져야 합니다.',
    );
  },

  isUnique(value) {
    const regex = /^[0-9]+$/;

    if (!(value >= 1 && value <= 45) || !regex.test(value)) {
      throw new Error('[ERROR] 입력 범위를 초과합니다.');
    }

    return value;
  },
};

module.exports = checkError;
