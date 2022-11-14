module.exports = {
  amountValidate(amount) {
    if (!Number(amount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (parseInt(amount, 10) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위어야 합니다.');
    }
  },
};
