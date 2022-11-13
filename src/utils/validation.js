const isValidateNumber = (purchaseAmount) => {
  const numberRegex = /^[0-9]+$/g;
  if (!purchaseAmount.match(numberRegex)) throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
};

const isAmountUnitOf1000 = (purchaseAmount) => {
  if (purchaseAmount % 1000 !== 0) throw new Error('[ERROR] 구입금액은 1000 단위 입니다.');
};

const isZeroNumber = (purchaseAmount) => {
  if (purchaseAmount === '0') throw new Error('[ERROR] 최소금액은 1000원입니다.');
};

module.exports = { isValidateNumber, isAmountUnitOf1000, isZeroNumber };
