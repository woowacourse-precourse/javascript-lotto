const { LOTTO_AMOUNT } = require("../constants/index");

const isValidAmount = (amount) => {
  if (!amount.match(/\d/)) throw new Error("[ERROR] 숫자를 입력해주세요.");
  if (Number(amount) % LOTTO_AMOUNT.VALID_UNIT) throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
  if (Number(amount) < LOTTO_AMOUNT.VALID_UNIT) throw new Error("[ERROR] 1,000원 이상으로 입력해주세요.");
  return true;
};

exports.isValidAmount = isValidAmount;
