const checkValidMoneyInput = (money) => {
  if (typeof money !== 'number') {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
  if (money < 1000 || money % 1000 !== 0) {
    throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
  }
};

module.exports = {
  checkValidMoneyInput,
};
