module.exports = {
  amountValidate(amount) {
    if (!Number(amount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
    if (parseInt(amount, 10) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위어야 합니다.');
    }
  },

  winNumberValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호의 개수는 6개어야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복되지 않는 당첨 번호를 입력해야 합니다.');
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 1~45 범위의 당첨 번호를 입력해야 합니다.');
      }
      if (!Number(number)) {
        throw new Error('[ERROR] 당첨 번호는 숫자만 입력할 수 있습니다.');
      }
    });
  },
};
