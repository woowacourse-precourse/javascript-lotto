// Lotto.js
class LottoSizeException extends Error {
  constructor(size, ...params) {
    super(...params);
    this.name = 'LottoSizeException';
    this.message = `[ERROR] 로또 번호는 ${size}개여야 합니다.`;
  }
}

class DuplicatedNumberException extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'DuplicatedNumberException';
    this.message = `[ERROR] 중복되는 숫자가 존재합니다.`;
  }
}

class InvalidInputException extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'InvalidInputExceptioin';
    this.message = `[ERROR] 입력값이 올바르지 않습니다.`;
  }
}

class RangeException extends Error {
  constructor(range, ...params) {
    super(...params);
    this.name = 'RangeException';
    this.message = `[ERROR] 로또 번호의 숫자 범위는 ${range[0]}~${range[1]}까지 입니다.`;
  }
}

// LottoManager.js
class BonusNotFoundException extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'BonusNotFoundException';
    this.message = `[ERROR] Cannot match with other lotto because it hasn't given bonus number.`;
  }
}

class PurchaseException extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'PurchaseException';
    this.message = '[ERROR] 로또 구입 금액은 1000원입니다. 1000원 단위로 입력해주세요.';
  }
}

module.exports = {
  LottoSizeException,
  DuplicatedNumberException,
  InvalidInputException,
  RangeException,

  PurchaseException,
  BonusNotFoundException,
}
