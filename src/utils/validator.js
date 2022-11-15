const Validator = class {
  static isLength = (target, length) => {
    if (target.length !== length)
      throw new Error(`[ERROR] 번호는 ${length}개여야 합니다.`);
    return this;
  };

  static isNumber = (number) => {
    if (!/^[0-9]+$/.test(number))
      throw new Error(`[ERROR] 숫자를 입력해주세요.`);
    return this;
  };

  static isRange = ({ target, start, end }) => {
    if (target >= start && target <= end) return this;
    throw new Error(`[ERROR] ${start}~${end}사이의 값을 입력해주세요.`);
  };

  static isDuplicated = (origin) => {
    if (new Set(origin).size !== origin.length)
      throw new Error("[ERROR] 중복이 존재합니다.");
    return this;
  };

  static isDivisible = (target, unit) => {
    if (Number(target) % unit)
      throw new Error(`[ERROR] ${unit} 단위로 입력해주세요.`);
    return this;
  };

  static isExist = (target, value) => {
    if (!new Set(target).has(value)) return false;
    return this;
  };

  static isGreaterOrEqual = (target, unit) => {
    if (target < unit)
      throw new Error("[ERROR] 1,000원 이상으로 입력해주세요.");
    return this;
  };
};

module.exports = Validator;
