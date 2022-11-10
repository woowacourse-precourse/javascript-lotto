const { LOTTO_AMOUNT, LOTTO_NUMBER } = require("../constants/index");

const Validator = class {
  static isValidAmount = (amount) => {
    if (!amount.match(/\d/)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (Number(amount) % LOTTO_AMOUNT.VALID_UNIT) throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    if (Number(amount) < LOTTO_AMOUNT.VALID_UNIT) throw new Error("[ERROR] 1,000원 이상으로 입력해주세요.");
    return true;
  };

  static isNumber = (number) => {
    if (number.toString().match(/\d/)) return true;
    return false;
  };

  static isLottoNumberFrom1to45 = (number) => {
    if (number >= LOTTO_NUMBER.MIN_NUMBER && number <= LOTTO_NUMBER.MAX_NUMBER) return true;
    return false;
  };
};

module.exports = Validator;
