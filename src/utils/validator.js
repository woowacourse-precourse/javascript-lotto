const validatePurchaseAmount = (money) => {
  // 구입 금액이 숫자인지 검사
  if (isNaN(+money)) throw new Error(MESSAGES.BUYING.TYPE_EXCEPTION);

  // 구입 금액이 1,000원 단위인지 검사
  if (+money % 1000 !== 0) throw new Error(MESSAGES.BUYING.UNIT_EXCEPTION);

  return true;
};

module.exports = { validatePurchaseAmount };
