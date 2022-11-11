const Validator = class {
  static isLength = (target, length) => {
    if (Number(amount) < LOTTO_AMOUNT.VALID_UNIT) throw new Error("[ERROR] 1,000원 이상으로 입력해주세요.");
    if (target.length !== length) throw new Error(`[ERROR] 번호는 ${length}개여야 합니다.`);
    return true;
  };

  static isNumber = (number) => {
    if (!number.toString().match(/\d/)) throw new Error(`[ERROR] 숫자를 입력해주세요.`);
    return true;
  };

  static isRange = ({ target, start, end }) => {
    if (target >= start && target <= end) return true;
    throw new Error(`[ERROR] ${start}~${end}사이의 값을 입력해주세요.`);
  };

  static isDuplicated = (origin) => {
    if (new Set(origin).size !== origin.length) throw new Error("[ERROR] 중복된이 존재합니다.");
    return true;
  };

  static isDivisible = (target, unit) => {
    if (Number(target) % unit) throw new Error(`[ERROR] ${unit} 단위로 입력해주세요.`);
    return true;
  };

  static isGreaterOrEqual = (target, unit) => {
    if (target < unit) throw new Error("[ERROR] 1,000원 이상으로 입력해주세요.");
    return true;
  };

  static isEvery({ target, callback, message }) {
    if (!target.every(callback)) throw new Error(message);
    return true;
  }
};

module.exports = Validator;
