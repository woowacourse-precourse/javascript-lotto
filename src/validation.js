const validation = {
  isUnitOf1000(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  },
};

module.exports = validation;
